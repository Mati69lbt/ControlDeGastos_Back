const Gastos = require("../modelos/Gastos");

const eliminar_Gasto = async (req, res) => {
  let id_params = req.params.id;

  let gasto;

  try {
    gasto = await Gastos.findOneAndDelete({ _id: id_params });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: "No se ha podido eliminar el gasto",
      error: error.message,
    });
  }

  if (!gasto) {
    return res.status(404).json({
      status: "error",
      message: "El gasto no existe",
    });
  }
  return res.status(200).json({
    status: "success",
    message: "Gasto Borrado",
    id_params,
    gasto,
  });
};

module.exports = eliminar_Gasto;
