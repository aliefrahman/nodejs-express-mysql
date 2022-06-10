const http = require('http');
const app = require('./app');

const port = process.env.PORT || 1309;

const server = http.createServer(app);
server.listen(port);