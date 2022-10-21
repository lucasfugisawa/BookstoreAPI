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

/**
 * @openapi
 * /books/:id:
 *   get:
 *     description: Returns information of a specific Book, given its id.
 *     responses:
 *       200:
 *         description: An object containing the Book information.
 *       404:
 *         description: Book not found for given id.
 *       500:
 *         description: In case of any internal server error.
 */
router.get('/books/:id', booksController.getBookById);

/**
 * @openapi
 * /books/:
 *   post:
 *     description: Creates a new Book using information in request body.
 *     responses:
 *       201:
 *         description: New Book successfully created. The Book information is returned, including its id.
 *       500:
 *         description: In case of any internal server error.
 */
router.post('/books', Validator('Book'), booksController.createBook);

/**
 * @openapi
 * /books/:id:
 *   put:
 *     description: Updates an existing Book (given its id) using information in request body.
 *     responses:
 *       200:
 *         description: Book successfully updated. The Book information is returned.
 *       500:
 *         description: In case of any internal server error.
 */
router.put('/books/:id', Validator('Book'), booksController.updateBook);

/**
 * @openapi
 * /books/:id:
 *   delete:
 *     description: Deletes a Book (given its id).
 *     responses:
 *       200:
 *         description: Book successfully deleted.
 *       500:
 *         description: In case of any internal server error.
 */
router.delete('/books/:id', booksController.deleteBook);

export default router;
