import { graphiqlExpress } from 'apollo-server-express'

import {
  GRAPHQL_EXPLORE,
  GRAPHQL_REST,
  GRAPHQL_WS,
} from 'config'

const graphiqlHandler = graphiqlExpress({
  endpointURL: GRAPHQL_REST,
  subscriptionsEndpoint: `${GRAPHQL_WS}`,
})

const apolloMiddleware: any = [ // tslint:disable-line no-any
  GRAPHQL_EXPLORE,
  graphiqlHandler
]

export default apolloMiddleware
