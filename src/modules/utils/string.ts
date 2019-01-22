// tslint:disable
export function uuid() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function(c) {
    return  (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  })
}

export const webaddress = ({
  protocol = 'http',
  host = 'localhost',
  port = 99999,
  path = '/'
}: {
  protocol?: string
  host?: string
  port?: string | number
  path?: string
} = {}) =>
  `${protocol}://${host}:${port}/${path.length > 1 && path.substring(0, 1) === '/'
    ? path.substring(1, path.length) : path}`
