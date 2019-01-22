import * as express from 'express'
import * as morgan from 'morgan'
import { isProd } from '../../config/environment'

export default function logger(app: express.Express) {
  // Morgan Logger
  app.use(morgan(
    isProd
    ? 'combined'
    : 'dev'
  ))
}
