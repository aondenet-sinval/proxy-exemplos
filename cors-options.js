const whitelist = [
  'https://pizzaria-react-pearl.vercel.app/',
  'https://www.aondenet.com',
  'http://localhost:3037'
]
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    }
  }
}
module.exports = corsOptions
