var express = require('express');
var proxy = require('http-proxy-middleware');


const findEnv = () => (process.argv.length > 2) ?
    process.argv[2] : 'local';
  

const fs = require('fs');
const env = JSON.parse(fs.readFileSync(`${findEnv()}.json`));

const port = env.port || 3000;

var app = express();


app.use(
  proxy({ 
    target: env.portal, 
    changeOrigin: true,
    router: {
      '/sale': env.sale,
      '/search': env.search, 
      '/campaign': env.campaign,
      '/recommendations': env.recommendations
    } 
  })
);

app.listen(port);