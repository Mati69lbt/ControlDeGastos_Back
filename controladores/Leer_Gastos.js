// cSpell:ignore parametros,busqueda

const Gastos = require("../modelos/Gastos");

const leer_Gastos = async (req, res) => {
  const parametros_url = req.params;

  try {
    let busqueda = Gastos.find({});

    if (parametros_url) {
      busqueda = busqueda.limit(parseInt(parametros_url));
    }

    const gastos = await busqueda.sort({ fecha: 1 }).exec();

    if (!gastos || gastos.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No hay gastos en la base de datos",
        error: error.message,
      });
    }
    res.status(200).json({
      status: "success",
      contador: gastos.length,
      gastos,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al obtener gastos",
      error: error.message,
    });
  }
};

module.exports = leer_Gastos;
