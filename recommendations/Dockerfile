FROM node:11

WORKDIR /app

COPY package*.json /app/
RUN npm ci
RUN npm install -g serve

COPY . /app

RUN npm run package

EXPOSE 5000

ENTRYPOINT serve ./target