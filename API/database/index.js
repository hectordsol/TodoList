const server = require("./src/server");
const PORT = 6001;

server.listen(PORT, () => {
    console.log("DB Server in port ",PORT);
});