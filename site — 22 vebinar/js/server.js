const http = require("http");

const host = "localhost";

// or port 3000
const port = "8000";

//http//:localhost:8000

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end("Hello, server working well!")
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Сервер запущен на http://${host}:${port}`)
});