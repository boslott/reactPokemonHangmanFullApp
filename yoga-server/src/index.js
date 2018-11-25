// Entry point to our application
// Must require the variable.env for them to work
// This is our 'express' server - done through GraphQL-Yoga Server
//
//  We are using cookies instead of local storage because we are using server-side rendering

const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const morgan = require('morgan');

require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();



// Using the command 'server.express.use() allows us to use express middleware

// Use express middleware to handle cookies (JWT)
server.express.use(cookieParser());

// HTTP request logger
server.express.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'combined'));


// Decode the JWT so we can get the user ID on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.userId = userId;
  }
  next();
});

// Use exprewss middleware to populate current user on each request
server.express.use( async (req, res, next) => {
  // If they are not logged in, skip this
  if(!req.userId) return next();
  const user = await db.query.user(
    { where: { id: req.userId } },
    '{ id, permissions, email, name }'
  );
  req.user = user;
  next();
});


  // We only want this endpoint to be visited from our approved URLs
  // Don't want any website to hit our endpoint, only our specific website, so we use cors
server.start({
  cors: {
    credentials: true,
    origin: [process.env.FRONTEND_URL], 
  },
}, details => {
    console.log(`😜 😜 😜 Server is now running on port http://localhost:${details.port}`);
  }
);
