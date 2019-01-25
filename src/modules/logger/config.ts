import * as winston from 'winston'
const {
  align,
  colorize,
  combine,
  // json,
  printf,
  timestamp,
} = winston.format

// CONSTANTS
export const outputDir = 'logs'
const maxFiles = 20     // 5MB * 20 = 100MB
const maxsize = 5242880 // 5MB

// FORMATTERS
const wfTimestamp = timestamp({ format: 'YYYY-MM-DD HH:mm:ss' })
const wfPrintf = printf(info => {
  const { timestamp: time, level, message, ...more } = info

  return `${time} [${level}]: ${message}${
    Object.keys(more).length ? ' ' + JSON.stringify(more, null, 2) : ''
  }`
})
const wfConsole = combine(
  colorize({ all: true }),
  wfTimestamp,
  align(),
  wfPrintf,
)
const wfFileText = combine(
  wfTimestamp,
  align(),
  wfPrintf,
)
// JSON
// const wfPrintJson = json(info => {
//   const { timestamp: time, level, message, ...more } = info

//   return { level, timestamp, message, more }
// })
// const wfFileJson = combine(
//   wfTimestamp,
//   wfPrintJson,
// )

export default {
  console: {
    dev: {
      level: 'silly', // tslint:disable-next-line object-literal-sort-keys
      format: wfConsole,
      handleExceptions: true,
      json: false,
    },
    prod: {
      level: 'info', // tslint:disable-next-line object-literal-sort-keys
      format: wfConsole,
      handleExceptions: true,
      json: false,
    },
  },
  file: {
    all: {
      level: 'silly', // tslint:disable-next-line object-literal-sort-keys
      filename: `${outputDir}/all.log`,
      format: wfFileText,
      handleExceptions: true,
      json: false,
      maxFiles,
      maxsize,
    },
    combined: {
      level: 'info', // tslint:disable-next-line object-literal-sort-keys
      filename: `${outputDir}/combined.log`,
      format: wfFileText,
      handleExceptions: true,
      json: false,
      maxFiles,
      maxsize,
    },
    error: {
      level: 'error', // tslint:disable-next-line object-literal-sort-keys
      filename: `${outputDir}/error.log`,
      format: wfFileText,
      handleExceptions: true,
      json: false,
      maxFiles,
      maxsize,
    },
  }
}
