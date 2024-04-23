const Gastos = require("../modelos/Gastos");

const eliminar_tabla = async (req, res) => {
  try {
    await Gastos.deleteMany({});
    res.status(200).json({
      status: "success",
      mensaje: "Todos los gastos han sido eliminados",
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      mensaje: "Faltan datos por enviar",
      error: error.message,
    });
  }
};

module.exports = eliminar_tabla;
