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
    "startTime": "2018-10-23T22:54:27.516Z",
    "interfaces": [
        {
            "ifname": "eth0",
            "ipaddress": "10.32.0.13"
        }
    ],
    "secretMessage": "Kube is Cool",
    "processId": 5,
    "requestHeaders": {
        "host": "xxx.241.xxx.171",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "accept-encoding": "gzip, deflate",
        "accept-language": "en-US,en;q=0.9",
        "x-cloud-trace-context": "78f550b3bbf754251021bb4a582f8bf0/17461875170587409562",
        "via": "1.1 google",
        "x-forwarded-for": "xx.169.xxx.145, xxx.241.xxx.171",
        "x-forwarded-proto": "http",
        "connection": "Keep-Alive"
    },
    "currentTime": "2018-10-24T15:06:49.046Z",
    "requestUrl": "/"
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
docker run -d --name pinger_app -p 3000:3000  -e CURRENT_VERSION=v1 pinger:latest
```

## Cleaning up Docker
Stop the container

`docker stop pinger_app`

Remove the container

`docker rm pinger_app`

Remove the image

`docker image rm pinger:v1`
