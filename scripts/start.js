const { concurrent, series, } = require('nps-utils') // rimraf, setColors
const { watch, } = require('./_helpers')
const paths = require('./_paths.js')

module.exports = {
  default: 'nps start.dev',
  prod: 'nps start.server.prod',
  dev: concurrent({
    server: {
      script: 'nps start.server',
      color: 'green.bold',
    },
    lint: {
      script: 'nps lint.watch',
      color: 'yellow.bold',
    },
  }),
  // server: 'ts-node -r tsconfig-paths/register src/',
  server: {
    default: concurrent({
      build: {
        script:  'nps build.watch',
        color: 'yellow.underline'
      },
      process: {
        script:  'nps start.server.dev',
        color: 'green.underline'
      }
    }),
    prod: 'node build/main.js',
    dev: 'npx nodemon',
  }
}
