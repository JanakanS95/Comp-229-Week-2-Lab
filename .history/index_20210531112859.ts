import http from 'http';
import path from 'path'; //Current path
import fs from 'fs'; //

const { clearScreenDown } = require('readline');

const hostname: string = '127.0.0.1';
const port: number = 3000;

console.log(path.dirname); //Current file path

const server: http.Server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  displayHome(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function displayHome(res: http.ServerResponse): void{

  fs.readFile("index.html", (err, data)=>
  {
    if(err)
    {
      res.writeHead(404);
      res.end("Error 404 - Page Not Found");
      return;
    }

    res.writeHead(200);
    res.end(data);
  })
} //Return void