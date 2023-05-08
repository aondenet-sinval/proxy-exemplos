const rateLimit = require('express-rate-limit')

const  apiLimiter  =  rateLimit ( {
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 10, // Limit each IP to 10 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: true, // Disable the `X-RateLimit-*` headers
} )

const optionsLimit = {
  target: 'http://localhost:3101/clientes', // target host
  changeOrigin: true, // needed for virtual hosted sites
  router: {
    // when request.headers.host == 'dev.localhost:3000',
    // override target 'http://www.example.org' to 'http://localhost:8000'
    'localhost:3300/limit/clientes' : 'http://localhost:3101/clientes' ,   // host + caminho
    'localhost:3300/limit/produtos' : 'http://localhost:3102/produtos' ,   // host + caminho
    'localhost:3300/limit/servicos' : 'http://localhost:3103/servicos' ,   // host + caminho
  },
};

module.exports = { apiLimiter, optionsLimit }
