import * as express from 'express'

export default function expressSecurity(app: express.Express) {
  // Don't expose any software information to potential hackers.
  app.disable('x-powered-by')
}
