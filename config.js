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
const whitelist = [
  'https://pizzaria-react-pearl.vercel.app/',
  'https://www.aondenet.com',
  'http://localhost:8080'
]
var optionsCors = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

module.exports = { helmetOptions, options, optionsCors}
