// Import Express from node_modules
const express = require('express');

/***** Import Users Router *****/
const usersRouter = require('./users/users-router')

/***** Import Custom Middlewares *****/
const { logger } = require('./middleware/middleware.js')

// Instantiate the server
const server = express();

// Enable Express to parse JSON bodies
server.use(express.json())

/***** Use Users Router *****/
server.use('/api/users', usersRouter)





// global middlewares and the user's router need to be connected here
server.use(logger)

server.get('/api', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

// Expose our server to the outer world
module.exports = server;
