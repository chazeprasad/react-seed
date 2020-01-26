import debug from 'debug';

const BASE = 'APP';

const COLOUR = {
  LOG: '#1abc9c',
  TRACE: '#6ab04c',
  INFO: '#0abde3',
  WARN: '#f39c12',
  ERROR: '#eb3b5a'
}; // choose better colours :)

const enabled = true //process.env.NODE_ENV === Env.PRODUCTION

const GenerateMessage = (level, message, source) => {
    // Set the prefix which will cause debug to enable the message
    const namespace = `${BASE}:${level}`;
    const log = debug(namespace);
    
    // Set the colour of the message based on the level
    log.color = COLOUR[level];
    log.enabled = enabled;
    
    if(source) { log(source, message); }
    else { log(message); }
}

const Trace = (message, source) => {
    return GenerateMessage('TRACE', message, source);
}

const Log = (message, source) => {
    return GenerateMessage('LOG', message, source);
}

const Info = (message, source) => {
    return GenerateMessage('INFO', message, source);
}

const Warn = (message, source) => {
    return GenerateMessage('WARN', message, source);
}

const Error = (message, source) => {
    return GenerateMessage('ERROR', message, source);
}
  

export const Logger = {
    Trace,
    Log,
    Info,
    Warn,
    Error
};