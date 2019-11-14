FROM node:12-alpine

WORKDIR /usr/src/app

ENV YARN_CACHE_FOLDER=/dev/shm/yarn_cache

COPY package.json ./

RUN yarn install --production && yarn cache clean

COPY server/ ./server/

COPY build/ ./build/

COPY config/ ./config/

COPY public/ ./public/

CMD node server/server.js