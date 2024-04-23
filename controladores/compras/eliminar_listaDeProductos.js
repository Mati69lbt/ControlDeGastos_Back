const Producto = require("../../modelos/Producto");

const eliminar_listaDeCompras = async (req, res) => {
  try {
    await Producto.deleteMany({});
    res.status(200).json({
      status: "success",
      mensaje: "Todos los productos han sido eliminados",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "Faltan datos por enviar",
      error: error.message,
    });
  }
};

module.exports = eliminar_listaDeCompras;
