// cSpell:ignore parametros

const Producto = require("../../modelos/Producto");


const editar_Producto = async (req, res) => {
  let id_producto = req.params.id;

  let parametros = req.body;

  try {
    //Buscar y actualizar el articulo
    const producto_Actualizado = await Producto.findOneAndUpdate(
      { _id: id_producto },
      parametros,
      { new: true }
    );

    if (!producto_Actualizado) {
      return res.status(404).json({
        status: "Error",
        message: "El producto no existe en la base de Datos",
      });
    } else {
      res.status(201).json({
        status: "success",
        articulo: producto_Actualizado,
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "Faltan datos por enviar",
      error: error.message,
    });
  }
};

module.exports = editar_Producto;