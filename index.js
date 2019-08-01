const PORT = 3000;

var chalk = require('chalk');
const myHttp = require("http");

console.log(chalk.blue('Hello, dude!'));

const pokemon = require('pokemon');

// Creating a server:

const server = myHttp.createServer((request,response) => {
    if (request.url === "/") {
      response.write("this is the data from index.js, and it should appear");
      response.end();
    } else if (request.url === "/ptwd") {
      response.write('nelly, student name, etc');
      response.end();
    } else {
      response.write('this is not a valid page');
      response.end();
    }


})

server.listen(3000, () => console.log("working"));


