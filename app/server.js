const http = require('http');
const os = require('os');
let i = 0;

const port = process.env.PINGER_PORT || 3000;

function getRuntimeInfo(){
    const vers = process.env.CURRENT_VERSION || 'UNKNOWN';
    const secretMessage = process.env.SECRET_MESSAGE || 'UNKNOWN';
    return {APIVersion: vers, startTime: new Date(), netInfo:os.networkInterfaces(), secretMessage, processId: process.pid};
}


const handleRequest = function(request, response) {
    runtimeInfo.requestHeaders = request.headers;
    runtimeInfo.currentTime = new Date();
    runtimeInfo.requestUrl = request.url;
    runtimeInfo.remoteAddress = request.headers['x-forwarded-for'] || request.connection.remoteAddress
    response.writeHead(200);
    response.end(JSON.stringify(runtimeInfo, null, 4));
};

const runtimeInfo = getRuntimeInfo();
const server = http.createServer(handleRequest);
server.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});
