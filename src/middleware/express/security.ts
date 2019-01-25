import * as express from 'express'

export default function expressSecurity(app: express.Application) {
  // Don't expose any software information to potential hackers.
  app.disable('x-powered-by')
}
