
const http = require('http')
const app = require('./app')
const port = 8800;
const server = http.createServer(app)

server.listen(port, () => {
    console.log(`\x1b[32m${'server is now ready for any request'}\x1b[0m`);
    console.log(`Server is running on port ${port}`)
})
