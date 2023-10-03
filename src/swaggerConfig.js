const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0', // Specify the OpenAPI version
    info: {
      title: 'Population Analyst API Documentation',
      version: '1.0.0',
      description: 'Population Analys API documentation for your Node.js project',
    },
  },
  
  // Specify API routes and document them
  apis: ['./src/routes/*.js'], // files containing annotations as above
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
