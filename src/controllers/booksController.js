import books from '../models/Book.js';
import createHttpError from 'http-errors';

class BooksController {

    static getAllBooks = (req, res, next) => {
        books.find()
            .populate('author')
            .exec((err, books) => {
                if (!err) {
                    res.status(200).json(books);
                } else {
                    let error = new createHttpError.InternalServerError('Error reading All Books.');
                    return next(error);
                }
        });
    };

    static getBookById = (req, res, next) => {
        const id = req.params.id;
        books.findById(id)
            .populate('author', ['name', 'country'])
            .exec((err, result) => {
            if (!err) {
                res.status(200).send(result);
            }
            else {
                let error = new createHttpError.BadRequest(`Book ${id} not found.`);
                return next(error);
            }
        })
    };

    static getBooksByPublisher = (req, res, next) => {
        const publisher = req.params.publisher;
        books.find({'publisher': publisher}, {}, (err, result) => {
            if (!err) {
                res.status(200).send(result);
            }
            else {
                let error = new createHttpError.InternalServerError(`Error searching Books by publisher ${publisher}.`);
                return next(error);
            }
        });
    };

    static createBook = (req, res, next) => {
        let book = new books(req.body);
        book.save((err) => {
           if (!err) {
               res.status(201).send(book.toJSON());
           }
           else {
               let error = new createHttpError.InternalServerError(`Error creating new Book.`, {payload: req.body.toJSON()});
               return next(error);
           }
        });
    };

    static updateBook = (req, res, next) => {
        const id = req.params.id;
        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: `Book ${id} successfully updated.`})
            }
            else {
                let error = new createHttpError.InternalServerError(`Error updating Book ${id}.`, {payload: req.body.toJSON()});
                return next(error);
            }
        })
    };

    static deleteBook = (req, res, next) => {
        const id = req.params.id;
        books.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: `Book ${id} successfully deleted.`});
            }
            else {
                let error = new createHttpError.InternalServerError(`Error deleting Book ${id}.`, {payload: req.body.toJSON()});
                return next(error);
            }
        })
    };

};

export default BooksController;
