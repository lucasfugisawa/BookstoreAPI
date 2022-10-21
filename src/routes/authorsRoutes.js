import express from 'express';
import authorsController from '../controllers/authorsController.js';
import Validator from '../middlewares/Validator.js';

const router = express.Router();

router
    .get('/authors', authorsController.getAllAuthors)
    .get('/authors/:id', authorsController.getAuthorById)
    .post('/authors', Validator('Author'), authorsController.createAuthor)
    .put('/authors/:id', Validator('Author'), authorsController.updateAuthor)
    .delete('/authors/:id', authorsController.deleteAuthor);

export default router;
