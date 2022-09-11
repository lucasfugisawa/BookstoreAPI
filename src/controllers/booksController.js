import books from '../models/Book.js';

class BooksController {

    static getAllBooks = (req, res) => {
        books.find()
            .populate('author')
            .exec((err, books) => {
            res.status(200).json(books);
        });
    };

    static getBookById = (req, res) => {
        const id = req.params.id;
        books.findById(id)
            .populate('author', ['name', 'country'])
            .exec((err, result) => {
            if (!err) {
                res.status(200).send(result);
            }
            else {
                res.status(400).send({message: `Book ${id} not found.`});
            }
        })
    };

    static getBooksByPublisher = (req, res) => {
        const publisher = req.params.publisher;
        books.find({'publisher': publisher}, {}, (err, result) => {
            if (!err) {
                res.status(200).send(result);
            }
            else {
                res.status(500).send({message: `Internal error searching Books by publisher ${publisher}.`});
            }
        });
    };

    static createBook = (req, res) => {
        let book = new books(req.body);
        book.save((err) => {
           if (err) {
               res.status(500).send({message: `Could not create Book: ${err}`})
           }
           else {
               res.status(201).send(book.toJSON());
           }
        });
    };

    static updateBook = (req, res) => {
        const id = req.params.id;
        books.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: `Book ${id} successfully updated.`})
            }
            else {
                res.status(500).send({message: err.message});
            }
        })
    };

    static deleteBook = (req, res) => {
        const id = req.params.id;
        books.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: `Book ${id} successfully deleted.`});
            }
            else {
                res.status(500).send({message: `Could not delete Book ${id}: ${err.message}`});
            }
        })
    };

};

export default BooksController;
