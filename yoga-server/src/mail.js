const nodemailer = require('nodemailer');

// A transport is one way of sending an email
// You can have several transports if wanted/needed
// const transport = nodemailer.createTransport({
//   host: process.env.MAIL_HOST,
//   port: process.env.MAIL_PORT,
//   auth: {
//     user : process.env.MAIL_USER,
//     pass: process.env.MAIL_PASS,
//   },
// });

// Can use email templating here
// Ex: MJML

// Function to create the email
// const makeANiceEmail = text => `
//   <div className="email" style="
//     border: 1px solid black;
//     padding: 20px;
//     font-family: sans-serif;
//     line-height: 2;
//     font-size: 20px;
//   ">
//     <h2>Hello There!</h2>
//     <p>${text}</p>

//     <p>😉, Bo Slott</p>
//   </div>
// `;

// exports.transport = transport;
// exports.makeANiceEmail = makeANiceEmail;