const axios = require('axios');

const BASE_URL = 'https://betapi.zgameslatam.com/v1/api';

const getPrematchHighlights = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/sport-events/prematch-highlights`,
      {
        params: {
          sportId: 'sr:sport:1',
          statusSportEvent: 'NotStarted',
          marketId: 1,
          limit: 10,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      'Error al consumir la API de eventos deportivos:',
      error.message
    );
    throw new Error('No se pudo obtener los datos de los eventos deportivos.');
  }
};

module.exports = {
  getPrematchHighlights,
};
