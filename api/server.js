// Import Express from node_modules
const express = require('express');

// Import Morgan network activity logger middleware
const morgan = require('morgan')

// Instantiate the server
const server = express();

// Enable Express to parse JSON bodies
server.use(express.json())

// Enable Morgan
server.use(morgan('dev'))

// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});

// Expose our server to the outer world
module.exports = server;
