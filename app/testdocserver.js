const http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    port = process.argv[2] || 3001;

const lnk = require('lnk');


//yeah, this is hard coding, but hey, it's a demo
if (!fs.existsSync('coverage')) {
    fs.mkdirSync('coverage');
}

if (!fs.existsSync('coverage/lcov-report')) {
    fs.mkdirSync('coverage/lcov-report');
}

//make a docs sym link
lnk(['coverage/lcov-report/.'], 'docs')
    .then(() => console.log('done'))
    .catch(e => {
    console.log('Reporting file system exists already')
});


const server =  http.createServer(function (request, response) {

    const uri = url.parse(request.url).pathname;

    if(uri === '/docs/stop'){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Shutting down Test Doc Server");
        response.end();
        console.log(`Shutting down Test Doc Server at ${new Date()}`);
        this.close();
        return;
    }
    let filename = path.join(process.cwd(), uri)

    fs.exists(filename, function (exists) {
        if (!exists) {
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write("404 Not Found\n");
            response.end();
            return;
        }

        if (fs.statSync(filename).isDirectory()) filename += '/index.html';

        fs.readFile(filename, "binary", function (err, file) {
            if (err) {
                response.writeHead(500, {"Content-Type": "text/plain"});
                response.write(err + "\n");
                response.end();
                return;
            }

            response.writeHead(200);
            response.write(file, "binary");
            response.end();
        });
    });
});
server.listen(parseInt(port, 10));

const shutdown = () =>{
    console.log('Test Doc Server is shutting down');
    server.close();
};

console.log("Test Doc Server is running at http://localhost:" + port);