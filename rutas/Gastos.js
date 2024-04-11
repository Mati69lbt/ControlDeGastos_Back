const { Router } = require("express");
const router = Router();

// Importaciones
const crear_Gastos = require("../controladores/Crear_Gastos");
const leer_Gastos = require("../controladores/Leer_Gastos");
const eliminar_Gasto = require("../controladores/Eliminar_Gastos");
const editar_gasto = require("../controladores/Editar_Gasto");

// Rutas

router.post("/crear", crear_Gastos);
router.get("/listado", leer_Gastos);
router.delete("/borrar/:id", eliminar_Gasto);
router.put("/editar/:id", editar_gasto)


module.exports = router;
