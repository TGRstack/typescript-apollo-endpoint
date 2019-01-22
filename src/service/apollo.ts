// TODO: refactor playground and logger to apolloMiddleware

import { ApolloServer, gql } from 'apollo-server-express'
import * as colors from 'config/console_colors'
import { isProd } from 'config/environment'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  },
}

const playgroundConfig = (() => {
  // https://www.apollographql.com/docs/apollo-server/features/graphql-playground.html#Configuring-Playground
  return {
    playground: {
      // settings: {
      //   'editor.theme': 'light',
      // },
      // tabs: [
      //   {
      //     endpoint,
      //     query: defaultQuery,
      //   },
      // ],
    }
  }
})()

const loggingConfig = (() => {
  return {
    formatError: (error: any) => {       // tslint:disable-line no-any
      !isProd && console.log(colors.error(error))        // tslint:disable-line no-console
      return error
    },
    formatResponse: (response: any) => { // tslint:disable-line no-any
      !isProd && console.log(colors.info(response))      // tslint:disable-line no-console
      return response
    },
  }
})()

const apolloConfig = (() => {
  // isProd?
  // introspection: true,
  // playground: true,

  return {
    resolvers,
    typeDefs,
    ...playgroundConfig,
    ...loggingConfig
  }
})()

export default new ApolloServer(apolloConfig)
