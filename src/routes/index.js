import express from 'express';
import booksRoutes from './booksRoutes.js';
import authorsRoutes from './authorsRoutes.js';
import swaggerUi from 'swagger-ui-express';
import apiDoc from '../../doc.json' assert {type: 'json'};

const routes = (app) => {

    app.use(
        express.json(),
        booksRoutes,
        authorsRoutes,
    );

    app.use('/', swaggerUi.serve, swaggerUi.setup(apiDoc));
};

export default routes;
