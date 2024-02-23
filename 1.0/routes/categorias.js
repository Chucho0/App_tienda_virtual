import { Router } from "express";
import httpCategorias from "../controllers/categorias.js";
import { check } from "express-validator";
import { validarCampos } from "../middlewares/validar-campos.js";
import helpersCategorias from "../helpers/categorias.js";

const router = Router();

router.get("/", httpCategorias.getCategorias);
router.get("/:id", httpCategorias.getCategoriasID);
router.post(
  "/",
  [

    check("descripcion", "La descripcion no puede estar vacias").notEmpty(),
    check("descripcion").isLength({ min: 6 }),
    // check("estado","Solo numeros").isNumeric(),
    validarCampos
  ],
  httpCategorias.postCategorias
);
router.put(
  "/:id",
  [
    check("id", "Se necesita un mongoid valido").isMongoId(),
    check("id").custom(helpersCategorias.validarExistaId),
    validarCampos,
  ],
  httpCategorias.putCategorias
);
router.put(
  "/activar/:id",
  [
    check("id", "Se necesita un mongoid valido").isMongoId(),
    check("id").custom(helpersCategorias.validarExistaId),
    validarCampos,
  ],
  httpCategorias.putCategoriasActivar
);
router.put(
  "/desactivar/:id",
  [
    check("id", "Se necesita un mongoid valido").isMongoId(),
    check("id").custom(helpersCategorias.validarExistaId),
    validarCampos,
  ],
  httpCategorias.putCategoriasDesactivar
);
router.delete(
  "/:id",
  [
    check("id", "Se necesita un mongoid valido").isMongoId(),
    check("id").custom(helpersCategorias.validarExistaId),
    validarCampos,
  ],
  httpCategorias.deleteCategoria
);

export default router;
