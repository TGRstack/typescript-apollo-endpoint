const { series, } = require('nps-utils') // rimraf, concurrent, setColors
const { watch, } = require('./_helpers')
const paths = require('./_paths.js')

const PREAMBLE = ['commit.pre',]

module.exports = {
  description: 'Remove the previous build and run the compiler',
  default: series.nps(...PREAMBLE, 'build.dev'),
  watch: watch(paths.watch.server, 'nps build.dev'),
  dev: {
    default: series.nps('scrub.build', 'build.dev.build'),
    build: 'npx webpack --config '+paths.wp.server.dev,
  },  
  prod: {
    default: series.nps(...PREAMBLE, 'build.prod.server'),
    server: 'npx webpack --config '+paths.wp.server.prod,
  },
}
