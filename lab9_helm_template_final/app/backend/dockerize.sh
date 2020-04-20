#!/bin/bash
docker build  -f Dockerfile -t backend .
docker tag backend phico/backend:2.0
docker push phico/backend:2.0
