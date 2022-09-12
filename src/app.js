import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';
import morgan from 'morgan';
import helmet from "helmet";
import compression from 'compression';

db.on('error', console.log.bind(console, 'Erro de conexão com o MongoDB.'));
db.once('open', () => {
    console.log('Conexão com MongoDB realizada com sucesso.');
});

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());
app.use(compression());

routes(app);

app.use((req, res, next) => {
    next(createHttpError(404));
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            status: err.status || 500,
            message: err.message,
        }
    })
});

export default app;
