FROM node:carbon-alpine

ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_ENV production

ADD package.json /home/node/app/package.json
ADD server.js /home/node/app/server.js

ENV MONGODB_URI = "mongodb://mongodb:27017/guestbook"

RUN chown -R node:node /home/node/app 

USER node
WORKDIR /home/node/app
RUN npm install --save

EXPOSE 3000

CMD node server.js
#CMD exec /bin/bash -c "trap : TERM INT; sleep infinity & wait"
