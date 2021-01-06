// Dependencies
const express = require('express');

// Imports
const init = require('./config/startup.config');

// Create App
const app = express();
init(app);

module.exports = app;