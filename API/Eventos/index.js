const server = require('./src/server');

PORT = 6004;

server.listen(PORT, ()=>{console.log(`Server Eventos en ${PORT}`)});