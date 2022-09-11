import authors from '../models/Author.js';

class AuthorsController {

    static getAllAuthors = (req, res) => {
        authors.find((err, author) => {
            res.status(200).json(author);
        });
    };

    static getAuthorById = (req, res) => {
        const id = req.params.id;
        authors.findById(id, (err, result) => {
            if (!err) {
                res.status(200).send(result);
            }
            else {
                res.status(400).send({message: `Author ${id} not found.`});
            }
        })
    };

    static createAuthor = (req, res) => {
        let author = new authors(req.body);
        author.save((err) => {
            if (err) {
                res.status(500).send({message: `Could not create Author: ${err}`})
            }
            else {
                res.status(201).send(author.toJSON());
            }
        });
    };

    static updateAuthor = (req, res) => {
        const id = req.params.id;
        authors.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if (!err) {
                res.status(200).send({message: `Author ${id} successfully updated.`})
            }
            else {
                res.status(500).send({message: err.message});
            }
        })
    };

    static deleteAuthor = (req, res) => {
        const id = req.params.id;
        authors.findByIdAndDelete(id, (err) => {
            if (!err) {
                res.status(200).send({message: `Author ${id} successfully deleted.`});
            }
            else {
                res.status(500).send({message: `Could not delete Author ${id}: ${err.message}`});
            }
        })
    };

}

export default AuthorsController;
