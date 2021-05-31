import http from 'http';
import path from 'path'; //Current path
import fs from 'fs'; //

const { clearScreenDown } = require('readline');

const hostname: string = '127.0.0.1';
const port: number = 3000;

console.log(path.dirname); //Current file path
fs.readFile('index.html', (err, data) =>
{
  console.log(data);
}) //Creates a Buffer -> An array of data

const server: http.Server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("Janakan's test server.");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});