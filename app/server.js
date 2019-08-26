const http = require('http');
let i = 0;

const port = process.env.PINGER_PORT || 3000;

var getTypeParam = (request)=>{
    let q = request.url.split('?'),result={};
    if(q.length>=2){
        q[1].split('&').forEach((item)=>{
            try {
                const key = item.split('=')[0];
                result = item.split('=')[1];
                if(key.toLowerCase() !== 'type') return;
            } catch (e) {
                console.log(`There is a problem with request url, ${request.url}`);
                return;
            }
        })
    }
    return result;
}


function getRuntimeInfo() {
    let networkInfo;
    try {
        networkInfo = require('os').networkInterfaces();
    } catch (e) {
        networkInfo = 'UNKNOWN_OR_INACCESSIBLE';
    }
    const vers = process.env.CURRENT_VERSION || 'UNDEFINED';
    const secretMessage = process.env.SECRET_MESSAGE || 'UNKNOWN';
    return {
        APIVersion: vers,
        startTime: new Date(),
        secretMessage,
        processId: process.pid,
        memoryUsage: process.memoryUsage(),
        networkInfo
    };
}


const handleRequest = function (request, response) {
    const param = getTypeParam(request);
    runtimeInfo.envVars = process.env;
    runtimeInfo.requestHeaders = request.headers;
    runtimeInfo.currentTime = new Date();
    runtimeInfo.requestUrl = request.url;
    runtimeInfo.remoteAddress = request.headers['x-forwarded-for'] || request.connection.remoteAddress;

    let rslt;
    if(param){
        rslt = runtimeInfo[param] ;
    }
    const str = JSON.stringify(rslt || runtimeInfo, null, 4);
    response.setHeader("Content-Type", "application/json");
    response.writeHead(200);
    response.end(str);
    console.log({app: "pinger", request, response});
};

const runtimeInfo = getRuntimeInfo();
const server = http.createServer(handleRequest);
server.listen(port, () => {
    console.log(`Listening on port ${port}`);
});


const shutdown = () => {
    console.log(`Server shutting down at ${new Date()}`);
    server.close()
};

module.exports = {server,shutdown};
