const Gastos = require("../modelos/Gastos");

const conseguir_un_solo_gasto = async (req, res) => {
  let gasto_ID = req.params.id;

  try {
    let gasto;
    gasto = await Gastos.findById(gasto_ID).exec();

    if (!gasto) {
      return res.status(404).json({
        status: "error",
        message: "El Gasto no existe",
      });
    } else {
      res.status(200).json({
        status: "success",
        message: "Gasto a mostrar",
        gasto,
      });
    }
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "Error al buscar el gasto",
      error: error.message,
    });
  }
};

module.exports = conseguir_un_solo_gasto;
