import app from './src/app.js';

const HTTP_PORT = process.env.HTTP_PORT ?? 3000;

app.listen(HTTP_PORT, () => {
    console.log(`Servidor executando em http://localhost:${HTTP_PORT}/`);
});
