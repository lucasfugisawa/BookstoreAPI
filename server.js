import app from './src/app.js';
import config from './config.js';

const HTTP_PORT = config.HTTP_PORT ?? 3000;

app.listen(HTTP_PORT, () => {
    console.log(`Servidor executando em http://localhost:${HTTP_PORT}/`);
});
