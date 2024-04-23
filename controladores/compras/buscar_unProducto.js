const Producto = require("../../modelos/Producto");

const buscar_unProducto = async (req, res) => {
  let producto_ID = req.params.id;

  try {
    let producto;
    producto = await Producto.findById(producto_ID).exec();

    if (!producto) {
      return res.status(404).json({
        status: "error",
        message: "El producto no existe",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "producto a mostrar",
        producto,
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "Error al buscar el producto",
      error: error.message,
    });
  }
};

module.exports = buscar_unProducto;
