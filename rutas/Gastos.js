// cSpell:ignore cloudinary
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const { Router } = require("express");
const router = Router();

//Configuración Cloudinary
const cloudinary = require("cloudinary").v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

//Configuración middleware Multer.
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "meses",
    format: async (req, file) => "jpg", // o el formato que prefieras
    public_id: (req, file) => {
      const date = new Date();
      return `expenses-${date.getFullYear()}-${date.getMonth() + 1}`;
    },
  },
});

const parser = multer({ storage: storage });

// Importaciones
const crear_Gastos = require("../controladores/Crear_Gastos");
const leer_Gastos = require("../controladores/Leer_Gastos");
const eliminar_Gasto = require("../controladores/Eliminar_Gastos");
const editar_gasto = require("../controladores/Editar_Gasto");
const conseguir_un_solo_gasto = require("../controladores/un_gasto");

// Importaciones de capturas
const subir_captura_a_bd = require("../controladores/subir_captura");
const Leer_Capturas = require("../controladores/Leer_Capturas");

// Ruta  para subir capturas de pantallas
router.post("/subirImagen", parser.single("captura"), subir_captura_a_bd);
router.get("/registros", Leer_Capturas);

// Rutas
router.post("/crear", crear_Gastos);
router.get("/listado", leer_Gastos);
router.delete("/borrar/:id", eliminar_Gasto);
router.put("/editar/:id", editar_gasto);
router.get("/buscar/:id", conseguir_un_solo_gasto);

module.exports = router;
