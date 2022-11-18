const fs = require("fs");
//const http = require("http");

// fs.watchFile("index.html","HTML FILE", (err)=>
// {
//     console.log("file is created")
//     console.log(err);
// })
const https = require("http").createServer((request, response) => {
    fs.writeFile(
      "create.html",
      "<div><h1> Hello World </h1><p>This is harshitha a...</p></div>",
      (err) => {
        if (err) {
          console.log(err);
        }
        console.log("created");
      }
    );
    fs.readFile("./create.html", null, function (error, data) {
      if (error) {
        response.writeHead(404);
        respone.write("Whoops! File not found!");
      } else {
        response.write(data);
      }
      response.end();
    });
  });
  https.listen(4000, () => console.log("server running at 4000"));










