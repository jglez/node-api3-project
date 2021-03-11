// Import Server
const server = require('./api/server')

const port = 5000

// Start server
server.listen(port, () => {
  console.log('GREAT SCOTT, IT\'S WORKING!!!!')
  console.log(`Listening on port ${port}`)
})
