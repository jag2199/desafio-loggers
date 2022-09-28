import { Router } from "express"
import compression from "compression"
import os from "os"

const router = Router()

const info = {
    "Node version": process.version,
    "Platform": process.platform,
    "Directorio de ejecución": process.cwd(),
    "ID del proceso": process.pid,
    "Uso de la memoria": process.memoryUsage(),
    "Memoria total reservada (rss)": process.memoryUsage().rss,
    "path de ejecución": process.execPath,
    "Argumentos de entrada": process.argv,
    // "Numero de procesadores": os.cpus().length
}

router.get("/zip", compression(), (req, res) => {
    res.send(info)
})

router.get("/", (req, res) => {
    console.log(info)
    res.send(info)
})

export default router