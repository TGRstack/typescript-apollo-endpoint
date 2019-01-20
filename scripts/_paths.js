const path = require('path');

const rootPath = path.resolve(__dirname, '..')
const wpPath = path.resolve(rootPath, 'webpack')

function mkWp() {
  return path.join(wpPath, ...Object.values(arguments))
}

module.exports = {
  rootPath,
  wp: {
    server: {
      dev: mkWp('webpack.dev.server.js'),
      prod: mkWp('webpack.prod.server.js'),
    },
  }
}
