const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { hasPermission } = require ('../utils');

// Within Node, builtin module that turns callbacks into promises
const { promisify } = require('util');

// const { transport, makeANiceEmail } = require('../mail');
// const stripe = require('../stripe');


const Mutation = {
  async createUser(parent, args, ctx, info) {
    console.log('Beginning the mutation CreateUser!');
    // Lowercase their email
    args.email = args.email.toLowerCase(); 
    // Hash their password using bcrypt (asynchronous so we need await)
    // Include salt length with bcrypt
    const password = await bcrypt.hash(args.password, 10);
    // Create the user in the DB
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ... args,
          password,
          permissions: { set: ['USER'] },
        },
      }, info,
    );
    // We will now automatically sign the user in since they just signed up
    // We will create the JWT token for them
    // jwt.sign(USER ID, APP SECRET)
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // We set the jwt as a cookie on the response
    // Pass the token, set some options
    // - make sure we cannot access this token via JS
    ctx.response.cookie('token', token, {
      httpOnly: false,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });
    // Finallllly, we return the user to the browser
    return user;
  },

  async deleteUser(parent, args, ctx, info) {
    const where = { id: args.id};
    // 1. Find the item
    const user = await ctx.db.query.user({ where }, `{
      id
    }`);

    return ctx.db.mutation.deleteUser({ where }, info);
  },

  async signin(parent, { email, password }, ctx, info) {
    // 1. Check if there is a user with that email
    const user = await ctx.db.query.user({ where: { email } });
    if(!user) {
      throw new Error(`No such user found for email ${email}`);
    }
    // 2. Check if their password is correct
    const valid = await bcrypt.compare(password, user.password);
    if(!valid) {
      throw new Error('Invalid Password!');
    }
    // 3. Generate the JWT token
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // 4. Set the cookie with the token
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    });
    // 5. Return the user
    return user;
  },

  signout(parent, args, ctx, info) {
    ctx.response.clearCookie('token');
    return { message: 'Goodbye!'};
  },

  async changeGameOption(parent, args, ctx, info) {
    // 1. Check if they are logged in
    if(!ctx.request.userId) {
      throw new Error('You must be logged in!');
    }

    // 2. Get current user
    const user = await ctx.db.query.user(
      {
        where: { id: ctx.request.userId },
      },
      info,
    );

    // 3. Change the game option
    return ctx.db.mutation.updateUser(
      {
        // Permissions is its own enum so we have to use 'set' for Prisma
        data: {
          gameOptions: {
            set: args.option,
          }
        },
        // Use the id we passed along for the ride because we might not be updating our own permissions, rather someone else's
        where: { id: args.userId },
      },
      info,
    );
  },

};

module.exports = Mutation;
