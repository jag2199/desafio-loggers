import { Router } from "express"
import ProductosContainer from "../daos/productos.js"
import logger from "../utils/loggers.js"

const router = Router()

let container = new ProductosContainer()

function isAuth(req, res, next) {
    if (req.isAuthenticated()) {
        logger.info(`Sesión iniciada por ${req.user.nombre} correctamente`)
        next()
    }
    else {
        logger.error(`Error: nombre o contraseña incorrecto`)
        res.redirect("/login")
    }
}

router.get("/", (req, res) => {
    // res.render("index", { productos: container.getAll(), nombre: req.user.nombre })
    res.redirect("/info")
})

// router.get("*", (req, res) => {
//     logger.warn(`Ruta ${req.originalUrl} no encontrada`)
//     res.send("Esta ruta no existe")
// })

// router.get("/productos", (req, res) => {
//     res.render("productos",)
// })

// router.get("/:id", (req, res) => {
//     res.send(container.getById(req.params.id))
// })

router.post("/", (req, res) => {
    container.save(req.body)
    res.redirect("/")
})

// router.put("/:id", (req, res) => {
//     res.send(container.update(req.params.id, req.body))
// })

// router.delete("/:id", (req, res) => {
//     res.send(container.delete(req.params.id))
// })

export default router