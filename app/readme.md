# Pinger Command Line Reference

The purpose of `pinger` is to return environment and runtime information about the machine
on which it's running.

The following examples assumes that `pinger` is running on `localhost` on the default port, `3000`.

Adjust your url accordingly.


## Getting All 

` curl http://localhost:3000/`

Example return:
```json
{
    "APIVersion": "UNDEFINED",
    "startTime": "2019-10-15T22:32:15.704Z",
    "secretMessage": "UNKNOWN",
    "processId": 8485,
    "memoryUsage": {
        "rss": 26165248,
        "heapTotal": 8208384,
        "heapUsed": 6034464,
        "external": 8640
    },
    "networkInfo": {
        "lo0": [
            {
                "address": "127.0.0.1",
                "netmask": "255.0.0.0",
                "family": "IPv4",
                "mac": "00:00:00:00:00:00",
                "internal": true,
                "cidr": "127.0.0.1/8"
            },
            {
                "address": "::1",
                "netmask": "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
                "family": "IPv6",
                "mac": "00:00:00:00:00:00",
                "scopeid": 0,
                "internal": true,
                "cidr": "::1/128"
            },
            {
                "address": "fe80::1",
                "netmask": "ffff:ffff:ffff:ffff::",
                "family": "IPv6",
                "mac": "00:00:00:00:00:00",
                "scopeid": 1,
                "internal": true,
                "cidr": "fe80::1/64"
            }
        ],
        "en0": [
            {
                "address": "fe80::10c9:bee2:fd08:d5f6",
                "netmask": "ffff:ffff:ffff:ffff::",
                "family": "IPv6",
                "mac": "ac:bc:32:c7:38:4b",
                "scopeid": 5,
                "internal": false,
                "cidr": "fe80::10c9:bee2:fd08:d5f6/64"
            },
            {
                "address": "192.168.86.234",
                "netmask": "255.255.255.0",
                "family": "IPv4",
                "mac": "ac:bc:32:c7:38:4b",
                "internal": false,
                "cidr": "192.168.86.234/24"
            }
        ],
        "awdl0": [
            {
                "address": "fe80::1065:f4ff:fe9c:5f22",
                "netmask": "ffff:ffff:ffff:ffff::",
                "family": "IPv6",
                "mac": "12:65:f4:9c:5f:22",
                "scopeid": 7,
                "internal": false,
                "cidr": "fe80::1065:f4ff:fe9c:5f22/64"
            }
        ],
        "utun0": [
            {
                "address": "fe80::f230:950c:afad:ae73",
                "netmask": "ffff:ffff:ffff:ffff::",
                "family": "IPv6",
                "mac": "00:00:00:00:00:00",
                "scopeid": 11,
                "internal": false,
                "cidr": "fe80::f230:950c:afad:ae73/64"
            }
        ],
        "en5": [
            {
                "address": "fe80::c6:b215:92e4:e826",
                "netmask": "ffff:ffff:ffff:ffff::",
                "family": "IPv6",
                "mac": "00:e0:4c:68:02:9f",
                "scopeid": 12,
                "internal": false,
                "cidr": "fe80::c6:b215:92e4:e826/64"
            },
            {
                "address": "192.168.86.235",
                "netmask": "255.255.255.0",
                "family": "IPv4",
                "mac": "00:e0:4c:68:02:9f",
                "internal": false,
                "cidr": "192.168.86.235/24"
            }
        ]
    },
    "envVars": {
        "PATH": "/Users/reselbob/.local/bin:/Users/reselbob/Library/Python/3.6/bin/:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/reselbob/Documents/drivers:/Library/Frameworks/Mono.framework/Versions/Current/Commands",
        "SHELL": "/bin/bash",
        "FORCE_COLOR": "true",
        "ELECTRON_NO_ATTACH_CONSOLE": "true",
        "SECURITYSESSIONID": "186a8",
        "USER": "reselbob",
        "DEBUG_COLORS": "true",
        "TMPDIR": "/var/folders/kr/bdw5rcf527x28m_4z71fbzs00000gn/T/",
        "COMMAND_MODE": "unix2003",
        "npm_config_color": "always",
        "SSH_AUTH_SOCK": "/private/tmp/com.apple.launchd.689vJtt48d/Listeners",
        "MOCHA_COLORS": "1",
        "XPC_FLAGS": "0x0",
        "COLORTERM": "true",
        "__CF_USER_TEXT_ENCODING": "0x1F5:0x0:0x0",
        "Apple_PubSub_Socket_Render": "/private/tmp/com.apple.launchd.PIFk5oUDUd/Render",
        "LOGNAME": "reselbob",
        "LC_CTYPE": "en_US.UTF-8",
        "XPC_SERVICE_NAME": "com.apple.xpc.launchd.oneshot.0x10000006.webstorm",
        "PWD": "/Users/reselbob/Documents/source-tree/pinger/app",
        "HOME": "/Users/reselbob"
    },
    "requestHeaders": {
        "host": "localhost:3000",
        "connection": "keep-alive",
        "upgrade-insecure-requests": "1",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
        "sec-fetch-mode": "navigate",
        "sec-fetch-user": "?1",
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
        "sec-fetch-site": "none",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9"
    },
    "currentTime": "2019-10-15T22:43:31.159Z",
    "requestUrl": "/",
    "remoteAddress": "::1"
}
```

## Getting Network Information Only

`curl http://localhost:3000/?type=networkInfo`

Example return:
```json
{
    "lo0": [
        {
            "address": "127.0.0.1",
            "netmask": "255.0.0.0",
            "family": "IPv4",
            "mac": "00:00:00:00:00:00",
            "internal": true,
            "cidr": "127.0.0.1/8"
        },
        {
            "address": "::1",
            "netmask": "ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff",
            "family": "IPv6",
            "mac": "00:00:00:00:00:00",
            "scopeid": 0,
            "internal": true,
            "cidr": "::1/128"
        },
        {
            "address": "fe80::1",
            "netmask": "ffff:ffff:ffff:ffff::",
            "family": "IPv6",
            "mac": "00:00:00:00:00:00",
            "scopeid": 1,
            "internal": true,
            "cidr": "fe80::1/64"
        }
    ],
    "en0": [
        {
            "address": "fe80::10c9:bee2:fd08:d5f6",
            "netmask": "ffff:ffff:ffff:ffff::",
            "family": "IPv6",
            "mac": "ac:bc:32:c7:38:4b",
            "scopeid": 5,
            "internal": false,
            "cidr": "fe80::10c9:bee2:fd08:d5f6/64"
        },
        {
            "address": "192.168.86.234",
            "netmask": "255.255.255.0",
            "family": "IPv4",
            "mac": "ac:bc:32:c7:38:4b",
            "internal": false,
            "cidr": "192.168.86.234/24"
        }
    ],
    "awdl0": [
        {
            "address": "fe80::1065:f4ff:fe9c:5f22",
            "netmask": "ffff:ffff:ffff:ffff::",
            "family": "IPv6",
            "mac": "12:65:f4:9c:5f:22",
            "scopeid": 7,
            "internal": false,
            "cidr": "fe80::1065:f4ff:fe9c:5f22/64"
        }
    ],
    "utun0": [
        {
            "address": "fe80::f230:950c:afad:ae73",
            "netmask": "ffff:ffff:ffff:ffff::",
            "family": "IPv6",
            "mac": "00:00:00:00:00:00",
            "scopeid": 11,
            "internal": false,
            "cidr": "fe80::f230:950c:afad:ae73/64"
        }
    ],
    "en5": [
        {
            "address": "fe80::c6:b215:92e4:e826",
            "netmask": "ffff:ffff:ffff:ffff::",
            "family": "IPv6",
            "mac": "00:e0:4c:68:02:9f",
            "scopeid": 12,
            "internal": false,
            "cidr": "fe80::c6:b215:92e4:e826/64"
        },
        {
            "address": "192.168.86.235",
            "netmask": "255.255.255.0",
            "family": "IPv4",
            "mac": "00:e0:4c:68:02:9f",
            "internal": false,
            "cidr": "192.168.86.235/24"
        }
    ]
}
```


## Getting Request Headers Only

`curl http://localhost:3000/?type=requestHeaders`

Example return:

```json
{
    "host": "localhost:3000",
    "connection": "keep-alive",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/77.0.3865.90 Safari/537.36",
    "sec-fetch-mode": "navigate",
    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
    "sec-fetch-site": "none",
    "accept-encoding": "gzip, deflate, br",
    "accept-language": "en-US,en;q=0.9"
}
```

## Getting Environment Variables Only

`curl http://localhost:3000/?type=envVars`

Example return:

```json
{
    "PATH": "/Users/reselbob/.local/bin:/Users/reselbob/Library/Python/3.6/bin/:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin:/Users/reselbob/Documents/drivers:/Library/Frameworks/Mono.framework/Versions/Current/Commands",
    "SHELL": "/bin/bash",
    "FORCE_COLOR": "true",
    "ELECTRON_NO_ATTACH_CONSOLE": "true",
    "SECURITYSESSIONID": "186a8",
    "USER": "reselbob",
    "DEBUG_COLORS": "true",
    "TMPDIR": "/var/folders/kr/bdw5rcf527x28m_4z71fbzs00000gn/T/",
    "COMMAND_MODE": "unix2003",
    "npm_config_color": "always",
    "SSH_AUTH_SOCK": "/private/tmp/com.apple.launchd.689vJtt48d/Listeners",
    "MOCHA_COLORS": "1",
    "XPC_FLAGS": "0x0",
    "COLORTERM": "true",
    "__CF_USER_TEXT_ENCODING": "0x1F5:0x0:0x0",
    "Apple_PubSub_Socket_Render": "/private/tmp/com.apple.launchd.PIFk5oUDUd/Render",
    "LOGNAME": "reselbob",
    "LC_CTYPE": "en_US.UTF-8",
    "XPC_SERVICE_NAME": "com.apple.xpc.launchd.oneshot.0x10000006.webstorm",
    "PWD": "/Users/reselbob/Documents/source-tree/pinger/app",
    "HOME": "/Users/reselbob"
}
```

## Getting Memory Usage Only

`curl http://localhost:3000/?type=memoryUsage`

Example return:
```json
{
    "rss": 23326720,
    "heapTotal": 8208384,
    "heapUsed": 5885200,
    "external": 8624
}
```

## Getting the Current Time on the Server

`curl http://localhost:3000/?type=currentTime`

Example return:

`2019-10-15T22:40:45.486Z`

## Getting the Request URL Only

`curl http://localhost:3000/?type=requestUrl`

Example return:

`"/?type=requestUrl"`

## Getting the Remote Address Only

`curl http://localhost:3000/?type=remoteAddress`

Example return:

`"::1"`