// tslint:disable object-literal-sort-keys

/**
 * Default levels for the npm configuration.
 * @type {Object}
 */
const levels = {
  error:   0,
  warn:    1,
  // NOTE: servr instead of server so logs align nicely
  servr:    2,
  info:    3,
  http:    4,
  verbose: 5,
  debug:   6,
  silly:   7,
}

/**
 * Default levels for the npm configuration.
 * @type {Object}
 */
const colors = {
  error:  'red',
  warn:   'yellow',
  servr:   'white',
  info:   'green',
  http:   'green',
  verbose: 'cyan',
  debug:  'blue',
  silly:  'magenta',
}

const LogLevels = {colors, levels}
export default LogLevels
