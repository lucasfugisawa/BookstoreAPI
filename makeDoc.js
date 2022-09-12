import swaggerJsdoc from 'swagger-jsdoc';
import fs from 'fs';

const PATH = './doc.json';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Bookstore API',
            version: '1.0.0',
        },
    },
    apis: ['./src/routes/*Routes.js'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);
console.log('OpenAPI Documentation successfully generated.');

try {
    fs.writeFileSync(PATH, JSON.stringify(openapiSpecification, null, 2), 'utf8');
    console.log(`OpenAPI Documentation successfully saved to ${PATH}`);
} catch (error) {
    console.log('An error has occurred while saving OpenAPI Documentation.', error);
}