var fs = require("fs");

// Asynchronous read
fs.readFile('README.md', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("Asynchronous read: " + data.toString());
});

// Synchronous read
// var data = fs.readFileSync('README.md');
// console.log("Synchronous read: " + data.toString());

console.log("Program Ended");