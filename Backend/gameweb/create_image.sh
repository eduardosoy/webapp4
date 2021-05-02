#!/bin/bash
cd ../..
cd ./Frontend/Angular
sudo docker run -it --rm --name webangular -v "$PWD":/usr/src/app -w /usr/src/app node:12.16.1 /bin/bash -c "cd /usr/src/app && npm install > /dev/null && npm i -g @angular/cli > /dev/null && ng build --baseHref=/new/"
#Move angular project to maven project
cd dist/Angular
cp -r . ../../../../Backend/gameweb/src/main/resources/static/new/

cd ../../../..
cd ./Backend/gameweb
sudo docker build -t eduardosoy7/4dgames -f Dockerfile .
