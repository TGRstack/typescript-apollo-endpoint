// TODO: refactor playground and logger to apolloMiddleware

import { ApolloServer } from 'apollo-server-express'
import * as colors from 'config/console_colors'
import { isProd } from 'config/environment'
import { Resolvers, Schema, } from 'gql/index'

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
    resolvers: Resolvers,
    typeDefs: Schema,
    ...playgroundConfig,
    ...loggingConfig
  }
})()

export default new ApolloServer(apolloConfig)
