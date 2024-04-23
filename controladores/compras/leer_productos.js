// cSpell:ignore parametros,busqueda

const Producto = require("../../modelos/Producto");

const leer_productos = async (req, res) => {
  try {
    const productos = await Producto.find({}).sort({ producto: 1 }).exec();

    if (!productos || productos.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No hay productos en la base de datos",
      });
    }
    res.status(200).json({
      status: "success",
      contador: productos.length,
      productos,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al obtener productos",
      error: error.message,
    });
  }
};

module.exports = leer_productos;
