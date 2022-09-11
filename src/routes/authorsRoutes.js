import express from 'express';
import authorsController from '../controllers/authorsController.js';

const router = express.Router();

router
    .get('/authors', authorsController.getAllAuthors)
    .get('/authors/:id', authorsController.getAuthorById)
    .post('/authors', authorsController.createAuthor)
    .put('/authors/:id', authorsController.updateAuthor)
    .delete('/authors/:id', authorsController.deleteAuthor);

export default router;
