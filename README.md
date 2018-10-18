# pinger
A simple Node.js app that returns information about the runtime environment.

## How to call

`curl http:IP_ADDRESS:3000`

WHERE `3000` is the default port.

You can alter the runtime port of the app by setting the environment variable, `PINGER_PORT` to the port number you want to use.

## Sample output

```$xslt

{
  "APIVersion": "UNKNOWN",
  "startTime": "2018-10-18T22:39:31.117Z",
  "interfaces": [
    {
      "ifname": "en5",
      "ipaddress": "192.168.86.103"
    }
  ],
  "requestHeaders": {
    "host": "localhost:3000",
    "connection": "keep-alive",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9"
  }
}
```