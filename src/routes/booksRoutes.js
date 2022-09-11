import express from 'express';
import booksController from '../controllers/booksController.js';
import Validator from '../middlewares/Validator.js';

const router = express.Router();

router
    .get('/books', booksController.getAllBooks)
    .get('/books/search', booksController.getBooksByPublisher)
    .get('/books/:id', booksController.getBookById)
    .post('/books', Validator('Book'), booksController.createBook)
    .put('/books/:id', Validator('Book'), booksController.updateBook)
    .delete('/books/:id', booksController.deleteBook);

export default router;
