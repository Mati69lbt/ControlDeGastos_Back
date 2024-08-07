const Registro = require("../modelos/Registro");

const Leer_Capturas = async (req, res) => {
  try {
    const capturas = await Registro.find({});

    if (!capturas || capturas.length === 0) {
      return res.status(404).json({
        status: "error",
        message: "No hay capturas en la base de datos",
        error: error.message,
      });
    } else {
         capturas.sort((a, b) => {
           const meses = [
             "Enero",
             "Febrero",
             "Marzo",
             "Abril",
             "Mayo",
             "Junio",
             "Julio",
             "Agosto",
             "Septiembre",
             "Octubre",
             "Noviembre",
             "Diciembre",
           ];
           const [mesA, yearA] = a.mes.split(" - ");
           const [mesB, yearB] = b.mes.split(" - ");
           const dateA = new Date(yearA, meses.indexOf(mesA));
           const dateB = new Date(yearB, meses.indexOf(mesB));
           return dateB - dateA;
         });
    }
    res.status(200).json({
      status: "success",
      contador: capturas.length,
      capturas,
    });
  } catch (error) {
    return res.status(500).json({
      status: "error",
      message: "Error al obtener capturas",
      error: error.message,
    });
  }
};

module.exports = Leer_Capturas;
