const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const helmet = require('helmet');

const app = express();
const helmetOptions = {
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"]
    }
  },
  frameguard: {
    action: 'deny'
  }
}
app.use(helmet(helmetOptions));
const options = {
  target: 'http://localhost:3101/clientes', // target host
  changeOrigin: true, // needed for virtual hosted sites
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    'localhost:3300/api/clientes' : 'http://localhost:3101/clientes' ,   // host + caminho
    'localhost:3300/api/produtos' : 'http://localhost:3102/produtos' ,   // host + caminho
    'localhost:3300/api/servicos' : 'http://localhost:3103/servicos' ,   // host + caminho
  },
};
app.use('/api', createProxyMiddleware(options));

const PORT = 3300; // defina a porta do servidor proxy express
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
