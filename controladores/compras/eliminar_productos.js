const Producto = require("../../modelos/Producto");


const eliminar_producto = async (req, res) => {
  let id_params = req.params.id;

  let producto;

  try {
    producto = await Producto.findOneAndDelete({ _id: id_params });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "No se ha podido eliminar el producto",
      error: error.message,
    });
  }

  if (!producto) {
    return res.status(404).json({
      status: "error",
      message: "El producto no existe",
    });
  }
  return res.status(200).json({
    status: "success",
    message: "producto Borrado",
    id_params,
    producto,
  });
};

module.exports = eliminar_producto;
