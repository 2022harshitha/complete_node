// var http = require("http");

// const httpServer = http.createServer(handleServer);


// function handleServer(req, res) {
  
// }

// module.exports = httpServer;

const http = require("http");
const server = http.createServer((req,res)=>{
    if(req.url==("/welcome"))
    {
        res.writeHead(200,{"Content-Type":"text/plain"});
        res.write("Welcome to dominos")
        res.end()
    }
    else if(req.url==("/contact"))
    {

        res.writeHead(200,{"Content-Type":"json"});
        res.write(
            JSON.stringify(
            { 

                 phone: '18602100000', 
                 email: 'guestcaredominos@jublfood.com' 
           }))
           res.end()
    }

    else if(req.url==("/About"))
    {
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.write("Dominos was started 20 years ago, serving customers all over world")
        res.end()
    }

    else 
    {
       res.writeHead(404,{"Content-Type":"text/plain"});
       res.write("404 ERROR PAGE")
       res.end()
    }
})

server.listen(8081,(res)=>{console.log("server running at 8081")});