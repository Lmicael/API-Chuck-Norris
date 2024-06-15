const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Chuck Norris',
            version: '1.0.0',
            description: 'Uma API para obter piadas de Chuck Norris',
        },
    },
    apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };