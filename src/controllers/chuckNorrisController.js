const chuckNorrisService = require('../services/chuckNorrisService');
const { writeToCsv } = require('../utils/csvUtil');

async function randomJoke(req, res) {
  try {
    let joke = await chuckNorrisService.fetchRandomJoke();
    writeToCsv('random', '', joke.value);

    return res.json({
      "joke": joke.value
    });
  }
  catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
}

async function textSearch(req, res) {
  let { query } = req.query;

  if (!query) {
    return res.status(400).json({
      error: 'O parâmetro de consulta "query" é obrigatório.'
    });
  }

  try {
    let joke = await chuckNorrisService.searchJoke(query);
    writeToCsv('search', query, joke.value);

    return res.json({
      "joke": joke.value
    });
  }
  catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
}

module.exports = { randomJoke, textSearch };