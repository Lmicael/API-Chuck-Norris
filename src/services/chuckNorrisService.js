const axios = require('axios');

const BASE_URL = 'https://api.chucknorris.io/jokes';

async function fetchRandomJoke() {
  let response = await axios.get(`${BASE_URL}/random`);
  return response.data;
}

async function searchJoke(query) {
  let response = await axios.get(`${BASE_URL}/search?query=${query}`);

  if (response.data.total === 0) {
    throw new Error('No jokes found for the given query.');
  }

  return response.data.result[0];
}

module.exports = { fetchRandomJoke, searchJoke };