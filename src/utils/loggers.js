import log4js from "log4js"
import * as dotenv from "dotenv"
dotenv.config()

log4js.configure({
    appenders: {
        console: { type: "console" },
        warn: { type: "file", filename: 'logs/warn.log' },
        error: { type: "file", filename: 'logs/error.log' }
    },
    categories: {
        default: { appenders: ["console"], level: "all" },
        console: { appenders: ["console"], level: "info" },
        error: { appenders: ["error"], level: "error" },
        warn: { appenders: ["warn"], level: "warn" }
    }
})

const logger = log4js.getLogger(`${process.env.LOG}`)

export default logger