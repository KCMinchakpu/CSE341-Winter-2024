const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'My Contact API',
      description: 'Contacts API',
    },
    host: 'localhost:8080',
    schemes: ['https','http'],
  };
  
  const outputFile = './swagger.json';
  const endpointsFiles = ['./routes/index.js'];
  
  // generate swagger.json
  swaggerAutogen(outputFile, endpointsFiles, doc);
  
 