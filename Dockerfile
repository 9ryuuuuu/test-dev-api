FROM node:16.15

WORKDIR /code

COPY ./api/package*.json /code/

RUN npm install -g npm@8.8.0

RUN npm install -g @nestjs/cli

RUN npm install