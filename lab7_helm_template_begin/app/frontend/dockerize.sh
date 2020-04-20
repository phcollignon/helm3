#!/bin/bash
ng build --prod 
docker build  -f Dockerfile -t frontend .
docker tag frontend phico/frontend:2.0
docker push phico/frontend:2.0
