FROM node:11

WORKDIR /app

COPY package.json /app/package.json
RUN npm install

COPY index.js /app/
COPY prod.json /app/

EXPOSE 3000

ENTRYPOINT ["node", "index.js", "prod"]
