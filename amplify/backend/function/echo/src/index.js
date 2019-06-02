// const awsServerlessExpress = require('aws-serverless-express');
// const app = require('./app');

// const server = awsServerlessExpress.createServer(app);

exports.handler = (event, context) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);
  context.done(null, event.arguments.msg);
  // awsServerlessExpress.proxy(server, event, context);
};
