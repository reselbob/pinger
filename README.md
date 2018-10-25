# pinger
A simple Node.js app that returns information about the runtime environment.

## How to call

`curl http://IP_ADDRESS:3000`

WHERE `3000` is the default port.

You can alter the runtime port of the app by setting the environment variable, `PINGER_PORT` to the port number you want to use.

## Sample output

```$json
{
    "APIVersion": "v2",
    "startTime": "2018-10-22T18:50:50.731Z",
    "interfaces": [
        {
            "ifname": "eth0",
            "ipaddress": "10.32.1.32"
        }
    ],
    "secretMessage": "Kube is Cool",
    "processId": 5,
    "requestHeaders": {
        "host": "35.201.69.103",
        "cache-control": "max-age=0",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "accept-encoding": "gzip, deflate",
        "accept-language": "en-US,en;q=0.9",
        "x-cloud-trace-context": "ca0af91d544a8e16a8bb74429c047a81/2793111891581103159",
        "via": "1.1 google",
        "x-forwarded-for": "76.169.179.145, 35.201.69.103",
        "x-forwarded-proto": "http",
        "connection": "Keep-Alive"
    },
    "currentTime": "2018-10-22T22:33:31.787Z"
}
```

## On DockerHub
`reselbob/pinger`

## Sample `docker build`
```$xslt
docker build -t pinger:v1 .
```

## Sample `docker run`
```$xslt
docker run -d --name pinger_app -p 3000:3000  -e CURRENT_VERSION=v1 pinger:v1
```

## Cleaning up Docker
Stop the container

`docker stop pinger_app`

Remove the container

`docker rm pinger_app`

Remove the image

`docker image rm pinger:v1`
