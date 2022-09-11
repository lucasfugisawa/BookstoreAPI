import express from 'express';
import booksController from '../controllers/booksController.js';

const router = express.Router();

router
    .get('/books', booksController.getAllBooks)
    .get('/books/search', booksController.getBooksByPublisher)
    .get('/books/:id', booksController.getBookById)
    .post('/books', booksController.createBook)
    .put('/books/:id', booksController.updateBook)
    .delete('/books/:id', booksController.deleteBook);

export default router;
