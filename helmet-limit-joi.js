const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const helmet = require('helmet');
const { helmetOptions, options } = require('./config')
const { apiLimiter, optionsLimit } = require('./config-limit')

const app = express();

app.use(helmet(helmetOptions));

app.use('/api', createProxyMiddleware(options));
// rota de acesso limitado por número de requests
app.use('/limit', apiLimiter, createProxyMiddleware(optionsLimit))

const PORT = 3300; // defina a porta do servidor proxy express
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
