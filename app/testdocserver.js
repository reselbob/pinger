const http = require("http"),
    url = require("url"),
    path = require("path"),
    fs = require("fs"),
    port = process.argv[2] || 3001;

const lnk = require('lnk');
const globby = require('globby');


//yeah, this is hard coding, but hey, it's a demo
const coverage = path.join(__dirname, 'coverage');
if (!fs.existsSync(coverage)) {
    console.log(`Creating ${coverage}`);
    fs.mkdirSync(coverage);
}

const lcov = path.join(coverage, 'lcov-report');

if (!fs.existsSync(lcov)) {
    console.log(`Creating ${lcov}`);
    fs.mkdirSync(lcov);
}
lnk(globby('coverage/lcov-report/*'), __dirname)
    .then(() => {
        console.log(`Create sym link, ${docs} to directory ${docRoot}`)
    })
    .catch(e => {
    console.log('Reporting file system exists already')
});

const server =  http.createServer(function (request, response) {
    const uri = url.parse(request.url).pathname;
    let filename = path.join(__dirname, uri);
    console.log(`The filename to retrieve is ${filename}.`);

    if(uri.indexOf('stop') >=0){
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Shutting down Test Doc Server");
        response.end();
        console.log(`Shutting down Test Doc Server at ${new Date()}`);
        this.close();
        return;
    }

    fs.exists(filename, function (exists) {
        console.log(`looking for directory ${filename}`);
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