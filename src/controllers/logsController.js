const { readLogsCsv } = require('../utils/csvUtil');

async function readLogs(req, res) {
  let { startDate, endDate } = req.query;

  try {
    if (startDate && !endDate || !startDate && endDate) {
      
      return res.status(400).json({
        error: 'Inserir "Data de Inicio" e "Data de Final".'
      });
    }
    else {
      let logs = await readLogsCsv(startDate, endDate);
      return res.json(logs);
    }
  }
  catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

module.exports = { readLogs };