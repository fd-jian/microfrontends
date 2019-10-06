FROM node:11

WORKDIR /app

RUN npm install -g serve

COPY content /app

EXPOSE 5000

ENTRYPOINT serve .
