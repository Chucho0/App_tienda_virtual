import { Router } from 'express'
import httpArticulos from '../controllers/articulos.js'
const router = Router()

router.get("/", httpArticulos.getArticulos)
router.get("/:id", httpArticulos.getArticuloID)
router.post("/", httpArticulos.postArticulo)
router.put("/", httpArticulos.putArticulos)


export default router