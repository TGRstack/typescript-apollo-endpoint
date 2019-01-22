import { webaddress } from 'modules/utils/string'
import { isProd } from './environment'

const {
  GRAPHQL_EXPLORE,
  GRAPHQL_REST,
  GRAPHQL_WS,
  HOST_NAME,
  PORT,
  SSL: SSL_ENABLED,
  SSL_CRT,
  SSL_KEY,
} = process.env

const HOST_PATH = webaddress({
  host: HOST_NAME,
  path: '',
  port: PORT,
}).slice(0, -1)

const SSL = !!SSL_ENABLED ? SSL_ENABLED.toLowerCase() === 'true' : false

export default {
  GRAPHQL_EXPLORE: GRAPHQL_EXPLORE || GRAPHQL_REST,
  GRAPHQL_REST,
  GRAPHQL_WS,

  HOST_PATH,

  isProd,

  PORT,
  SSL,
  SSL_CRT,
  SSL_KEY,
}
