const Registro = require("../modelos/Registro");

const subir_captura_a_bd = async (req, res) => {
  try {
    const { path } = req.file;
    const { mes } = req.body;

    const nuevoRegistro = new Registro({
      mes,
      imagen: path,
    });

    await nuevoRegistro.save();

    res.status(200).json({
      status: "success",
      message: "Captura guardada correctamente.",
      nuevoRegistro,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      mensaje: "Faltan datos por enviar",
      error: error.message,
    });
  }
};

module.exports = subir_captura_a_bd