const Dotenv = require('dotenv-webpack');
const path = require('path')
const WriteFilePlugin = require('write-file-webpack-plugin');

const paths = require('./paths')

// #  RULES
// ## TS w/ BABEL
const typescript = (() => {
  const configFile = path.resolve(paths._, 'tsconfig.json')
  const tsOptions = {
    context: paths._,
    configFile,
    transpileOnly: true,
  }
  const loader = {
    test: /\.ts$/,
    include: paths.src._,
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: true,
        }
      },
      {
        loader: 'ts-loader',
        options: tsOptions
      }
    ]
  }
  // const tsPaths = new TsconfigPathsPlugin({
  //   configFile,
  //   extensions: [".ts", ".tsx"],
  // })

  return {
    loader,
    // tsPaths,
  }
})()


// FIXME: image loading isn't working, using copyWebpack instead
// ## FILES like csv and images
const files = {
  // test: /\.(png|gif|jpe?g)$/,
  exclude: [/\.js$/, /\.ts$/, /\.json$/],
  use: [
    {
      loader: 'file-loader',
      options: {
        publicPath: 'assets/',
        name (file) {
          if (process.env === 'development' || process.env === undefined) {
            return '[path][name].[ext]'
          }

          return '[hash].[ext]'
        }
      }
    }
  ]
}


module.exports = {
  node: {
    __dirname: false,
    __filename: false,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [paths.src._, paths.node_modules],
    // plugins: [
    //   typescript.paths,
    // ]
  },
  module: {
    rules: [
      typescript.loader,
      files
    ],
  },
  plugins: [
    new WriteFilePlugin({ log: true }),
    new Dotenv({
      path: path.join(paths._, '.env'),
      safe: true,    // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
      systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
      // silent: true   // hide any errors
    }),
  ],
};
