#!/bin/bash
ng build --prod 
docker build  -f Dockerfile -t frontend .
docker tag frontend phico/frontend:1.1
docker push phico/frontend:1.1
