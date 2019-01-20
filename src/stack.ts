import middleware from './middleware'
import Service from './service'

const config = {
  endpoint: '/',
  host: '127.0.0.1',
  port: 3000,
}

const Stack = Service({
  config,
  middleware,
})

export default Stack
