# pinger
A simple Node.js app that returns information about the runtime environment.

## Running `pinger` on a local machine.
The following steps describe how to run `pinger` on a standalone computer or virtual machine.
Please be advised that the machine needs to have Node.js and `curl` installed.

**Step 1:** Make sure that Node.js is running your computer or VM (virtual machine). Run
the following command in a terminal window.

`node -v`

You'll get output similar to the following:

`v8.11.3`

(Version number may vary according to your machine.)

If Node.js in not installed, you'll get an error. In that case, you can find the instructions
for downloading and installing Node.js [here](https://nodejs.org/en/download/).

**Step 2:** Clone this repository to the local machine or VM.

`git clone https://github.com/reselbob/pinger.git`

**Step 3:** Navigate into the directory that has the `pinger` source code.

`cd pinger/app`

**Step 4:** Install the application's dependencies packages.

`npm install`

**Step 5:** Invoke the application

`node server.js`

**Step 6:** Call the application for output using `curl`

`curl localhost:3000`

WHERE `3000` is the default port.

You can alter the runtime port of the app by setting the environment variable, `PINGER_PORT` to the port number you want to use.

You get output similar to the following:

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

## Building and running `pinger` as a Docker container

This set of instructions assumes that you have the source code cloned from the project's
respository on GitHub as described in the section above.

Also, this set of instructions assumes that `Docker` installed on the local machine or
VM where you plan to run the container.

**Step 1:** To confirm `Docker` installed, type:

`docker version`

You'll get output similar to teh following:
```yaml
Client: Docker Engine - Community
 Version:           19.03.2
 API version:       1.40
 Go version:        go1.12.8
 Git commit:        6a30dfc
 Built:             Thu Aug 29 05:26:49 2019
 OS/Arch:           darwin/amd64
 Experimental:      false

Server: Docker Engine - Community
 Engine:
  Version:          19.03.2
  API version:      1.40 (minimum version 1.12)
  Go version:       go1.12.8
  Git commit:       6a30dfc
  Built:            Thu Aug 29 05:32:21 2019
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          v1.2.6
  GitCommit:        894b81a4b802e4eb2a91d1ce216b8817763c29fb
 runc:
  Version:          1.0.0-rc8
  GitCommit:        425e105d5a03fabd737a126ad93d62a9eeede87f
 docker-init:
  Version:          0.18.0
  GitCommit:        fec3683
```
Otherwise, go [here](https://docs.docker.com/install/) to learn how to install Docker on your
local machine or VM.


**Step 2:** Confirm that you are in the source code directory and that the file, `Dockefile`
is in that directory. (The instructions for navigating to the source code directory are
described in the section above, _Running `pinger` on a local machine_.)

`ls -ls`

You'll get output similar to the following:

```text
total 200
-rw-r--r--@   1 cooluser  staff    56B Sep  5 13:24 Dockerfile
drwxr-xr-x  226 cooluser  staff   7.1K Aug 29 19:49 node_modules
-rw-r--r--    1 cooluser  staff    82K Aug 29 19:49 package-lock.json
-rw-r--r--    1 cooluser  staff   632B Sep  4 10:48 package.json
-rw-r--r--    1 cooluser  staff   2.1K Sep  2 09:56 server.js
drwxr-xr-x    4 cooluser  staff   128B Sep  4 12:46 test
-rw-r--r--    1 cooluser  staff   2.2K Aug 29 20:01 testdocserver.js

```

**Step 3:** Build the container image.

(You must be connected to the internet for this step to work.)

`docker build -t pinger:v1 .`

**Step 4:** Create the container get it running

```text
docker run -d --name pinger_app -p 3001:3000  -e CURRENT_VERSION=v1 pinger:v1
```
Confirm the container is running:

`reselbob$ docker ps -a | grep pinger`

You'll get output similar to the following:

```text
859cc53b1ea9    pinger:v1    "node server.js"    58 seconds ago   Up 57 seconds      0.0.0.0:3001->3000/tcp   pinger_app
```
**Step 5:** Call the application for output using `curl`. Notice that the instance of
`pinger` is running on a new port number, `3001`.

`curl localhost:3001`

**Step 6:** Let's remove the container. First we'll stop it.

`docker stop pinger_app`

**Step 6:** Then, we'll remove the container

`docker rm pinger_app`

**Step 7:** Finally, we'll remove the container image from the machine

`docker image rm pinger:v1`

**Congratulations!** You've completed the exercise.
