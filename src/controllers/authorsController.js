import authors from '../models/Author.js';
import createHttpError from 'http-errors';

class AuthorsController {

    static getAllAuthors = (req, res, next) => {
        authors.find((err, author) => {
            if (!err) {
                res.status(200).json(author);
            } else {
                let error = new createHttpError.InternalServerError('Error reading All Authors.');
                return next(error);
            }
        });
    };

    static getAuthorById = (req, res, next) => {
        const id = req.params.id;
        authors.findById(id, (err, result) => {
            if (!err) {
                res.status(200).send(result);
            }
            else {
                let error = new createHttpError.BadRequest(`Author ${id} not found.`);
                return next(error);
            }
        })
    };

    static createAuthor = (req, res, next) => {
        let author = new authors(req.body);
        author.save((err) => {
            if (!err) {
                res.status(201).send(author.toJSON());
            }
            else {
                let error = new createHttpError.InternalServerError(`Error creating new Author.`, {payload: req.body.toJSON()});
                return next(error);
            }
        });
    };

    static updateAuthor = (req, res, next) => {
        const id = req.params.id;
        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: `Author ${id} successfully updated.`})
            }
            else {
                let error = new createHttpError.InternalServerError(`Error updating Author ${id}.`, {payload: req.body.toJSON()});
                return next(error);
            }
        })
    };

    static deleteAuthor = (req, res, next) => {
        const id = req.params.id;
        authors.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: `Author ${id} successfully deleted.`});
            }
            else {
                let error = new createHttpError.InternalServerError(`Error deleting Author ${id}.`);
                return next(error);
            }
        })
    };

}

export default AuthorsController;
