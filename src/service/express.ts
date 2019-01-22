import * as colors from 'config/console_colors'
import * as express from 'express'
import * as http from 'http'
import ApolloServer from './apollo'

// tslint:disable-next-line no-any
const SUCCESS_MESSAGE = (config: any) => {
  const {
    GRAPHQL_REST: REST,
    GRAPHQL_EXPLORE: EXPLORE,
    // GRAPHQL_WS: WS,
    HOST_PATH
  } = config
  // EVERYTHING BOOTED SUCCESFULLY
  const SE = (t = '') => t.toUpperCase().substr(0, 4)
  const onlineTitle = `${SE(process.env.NODE_PLATFORM)} Online (${SE(process.env.NODE_ENV)})`

  const combo = (a: string, b: string) => [a, b].join('')

  return colors.msg(`\n\n
  🌐    ${onlineTitle}    🌐
  -------------------------------------------------------
  📡    endpoint    ${combo(HOST_PATH, REST)}
  🎮    explorer    ${combo(HOST_PATH, EXPLORE)}
  -------------------------------------------------------`)
  // ➿    websocket   ${combo(HOST_PATH, WS)}
}

export default class Express {
  app: express.Express
  config: any                     // tslint:disable-line no-any
  successMessage: string
  middleware: any                 // tslint:disable-line no-any

  constructor({
    config,
    middleware,
  }: {
    config: any, middleware: any, // tslint:disable-line no-any
  }) {
    this.app = express()
    this.config = config
    this.middleware = middleware
    this.successMessage = SUCCESS_MESSAGE(config)

    this.setup()
  }

  setup() {
    const {app, config, middleware, } = this

    // Express
    middleware.expressSecurity(app)
    middleware.expressLogger(app)

    // Apollo
    ApolloServer.applyMiddleware({
      app,
      path: config.GRAPHQL_REST,
    })
  }

  start() {
    const {app, config, } = this // middleware,

    // Create a http/ws listener for our express app.
    const ws = http.createServer(app)
    const listener = ws.listen({port: config.PORT}, () => {
      // middleware.graphqlWs(ws)

      // tslint:disable-next-line no-console
      console.log(this.successMessage)
    })
    return listener
  }

  // someHTTPS() {
  //   TODO: switching between HTTP and HTTPS
  //   const {
  //     HOST_NAME,
  //     PORT,
  //   } = process.env
  //   export const development = {
  //     hostname: HOST_NAME,
  //     port: PORT,
  //     ssl: false,
  //   }
  //   https://www.apollographql.com/docs/apollo-server/essentials/server.html#ssl
  //   const production = {
  //     ssl: true,
  //     port: PORT || 443,
  //     hostname: HOST_NAME || 'api.example.com',
  //   }
  //   {
  //     key: fs.readFileSync(`./ssl/${environment}/server.key`),
  //     cert: fs.readFileSync(`./ssl/${environment}/server.crt`)
  //   }

  //   export const staging
  //   export const test
  // }
}
