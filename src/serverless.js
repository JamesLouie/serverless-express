'use strict'
const serverless = require('@vendia/serverless-express');
const app = require('./app');
const server = serverless.createServer(app);

exports.handler = (event, context) => serverless.proxy(server, event, context, 'PROMISE').promise;