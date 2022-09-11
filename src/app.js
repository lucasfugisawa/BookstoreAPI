import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
import createHttpError from 'http-errors';
import morgan from 'morgan';

db.on('error', console.log.bind(console, 'Erro de conexão com o MongoDB.'));
db.once('open', () => {
    console.log('Conexão com MongoDB realizada com sucesso.');
});

const app = express();

app.use(express.json());

app.use(morgan('tiny'));

app.use((req, res, next) => {
    next(createHttpError(404));
})

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            status: err.status || 500,
            message: err.message,
        }
    })
});

routes(app);

export default app;
