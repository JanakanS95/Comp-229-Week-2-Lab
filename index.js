"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const { clearScreenDown } = require('readline');
const hostname = '127.0.0.1';
const port = 3000;
console.log(path_1.default.dirname);
const server = http_1.default.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    displayHome(res);
});
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
function displayHome(res) {
    fs_1.default.readFile("index.html", (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end("Error 404 - Page Not Found");
            return;
        }
        res.writeHead(200);
        res.end(data);
    });
}
//# sourceMappingURL=index.js.map