import debug from 'debug'
import { AppEnv } from '../core/Env'

const BASE = 'APP'

const COLOUR = {
    LOG: '#1abc9c',
    TRACE: '#6ab04c',
    INFO: '#0abde3',
    WARN: '#f39c12',
    ERROR: '#eb3b5a',
}

const enabled = true // process.env.NODE_ENV === AppEnv.PRODUCTION

const GenerateMessage = (level, message, source) => {
    const namespace = `${BASE}:${level}`
    const log = debug(namespace)

    log.color = COLOUR[level]
    log.enabled = enabled

    if (source) {
        log(source, message)
    } else {
        log(message)
    }
}

const Trace = (message, source) => {
    return GenerateMessage('TRACE', message, source)
}

const Log = (message, source) => {
    return GenerateMessage('LOG', message, source)
}

const Info = (message, source) => {
    return GenerateMessage('INFO', message, source)
}

const Warn = (message, source) => {
    return GenerateMessage('WARN', message, source)
}

const Error = (message, source) => {
    return GenerateMessage('ERROR', message, source)
}

export const Logger = {
    Trace,
    Log,
    Info,
    Warn,
    Error,
}
