const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { randomBytes } = require('crypto');
const { hasPermission } = require ('../utils');

// Within Node, builtin module that turns callbacks into promises
const { promisify } = require('util');

// const { transport, makeANiceEmail } = require('../mail');
// const stripe = require('../stripe');


const mutations = {
  async createUser(parent, args, ctx, info) {
    // Lowercase their email
    args.email = args.email.toLowercase();
    // Hash their password using bcrypt (asynchronous so we need await)
    // Include salt length with bcrypt
    const password = await bcrypt.hash(args.password, 10);
    // Create the user in the DB
    const user = await ctx.db.mutation.createUser(0
      {
        data: {
          ... args,
          password,
          permissions: { set: ['USER'] },
        },
      }, info
    );
    // We will now automatically sign the user in since they just signed up
    // We will create the JWT token for them
    // jwt.sign(USER ID, APP SECRET)
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // We set the jwt as a cookie on the response
    // Pass the token, set some options
    // - make sure we cannot access this token via JS
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365, // 1 year cookie
    });
    // Finallllly, we return the user to the browser
    return user;
  },

};

module.exports = mutations;
