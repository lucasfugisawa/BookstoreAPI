import express from 'express';
import booksController from '../controllers/booksController.js';
import Validator from '../middlewares/Validator.js';

const router = express.Router();

/**
 * @openapi
 * /books:
 *   get:
 *     description: Lists all Books.
 *     responses:
 *       200:
 *         description: An array containing all Books found.
 *       500:
 *         description: In case of any internal server error.
 */
router.get('/books', booksController.getAllBooks);


router.get('/books/search', booksController.getBooksByPublisher);
router.get('/books/:id', booksController.getBookById);
router.post('/books', Validator('Book'), booksController.createBook);
router.put('/books/:id', Validator('Book'), booksController.updateBook);
router.delete('/books/:id', booksController.deleteBook);

export default router;
