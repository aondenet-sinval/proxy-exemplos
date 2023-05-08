const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const helmet = require('helmet');
const { helmetOptions, options } = require('./config.js')
const app = express();

app.use(helmet(helmetOptions));

app.use('/api', createProxyMiddleware(options));
app.use(cors(corsOptions))
app.use('/cors', createProxyMiddleware(options))

const PORT = 3300; // defina a porta do servidor proxy express
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
