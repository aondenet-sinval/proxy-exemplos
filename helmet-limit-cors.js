const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const helmet = require('helmet');
const { helmetOptions, options } = require('./config.js')
const cors = require('cors')
const corsOptions = require('./cors-options')

const app = express();

app.use(helmet(helmetOptions));

app.use('/api', cors(corsOptions), createProxyMiddleware(options));

app.use('/cors', createProxyMiddleware(options))

const PORT = 3300; // defina a porta do servidor proxy express
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
