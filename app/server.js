const http = require('http');
const os = require('os');
let i = 0;

const port = process.env.PINGER_PORT || 3000;

function getRuntimeInfo(){
    let interfaces = [];
    const ifaces = os.networkInterfaces();
    Object.keys(ifaces).forEach(function (ifname) {
        var alias = 0;

        ifaces[ifname].forEach(function (iface) {
            if ('IPv4' !== iface.family || iface.internal !== false) {
                // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                return;
            }

            if (alias >= 1) {
                // this single interface has multiple ipv4 addresses
                interfaces.push({ifname: ifname + ':' + alias, ipaddress: iface.address})
                //console.log(ifname + ':' + alias, iface.address);
            } else {
                // this interface has only one ipv4 adress
                interfaces.push({ifname: ifname, ipaddress: iface.address})
                //console.log(ifname, iface.address);
            }
            ++alias;
        });
    });
    const vers = process.env.CURRENT_VERSION || 'UNKNOWN';
    const secretMessage = process.env.SECRET_MESSAGE || 'UNKNOWN';

    return {APIVersion: vers, startTime: new Date(), interfaces, secretMessage, processId: process.pid};
}


const handleRequest = function(request, response) {
    const runtimeInfo = getRuntimeInfo();
    runtimeInfo.requestHeaders = request.headers;
    runtimeInfo.currentTime = new Date();
    response.writeHead(200);
    response.end(JSON.stringify(runtimeInfo));
};

const www = http.createServer(handleRequest);
www.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});
