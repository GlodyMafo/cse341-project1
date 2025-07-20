const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Users API',
    description: 'Projoct1 Contact'
  },
  host: 'cse341-project1-ml6z.onrender.com',
  schemes:['https']
};

const outputFile = './swagger.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);


