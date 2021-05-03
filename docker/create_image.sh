#!/bin/bash
cd ../Frontend/Angular
sudo docker run --rm -v "$PWD":/usr/src/app -w /usr/src/app node:16.0.0 /bin/bash -c "npm install && npm run build"
cd ../../Backend/gameweb/src/main/resources/static
rm -rf new
mkdir new
cd new
cp -r ../../../../../../../Frontend/Angular/dist/Angular/* .
cd ../../../../../../../Backend/gameweb
sudo docker run --rm -v "$PWD":/data -w /data maven:3.8.1 mvn package
cd ../..
sudo docker build -t eduardosoy7/4dgames -f ./docker/Dockerfile ./Backend/gameweb/target
exit 0
