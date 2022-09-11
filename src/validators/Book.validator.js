import Joi from 'joi';

const bookSchema = Joi.object({
    title: Joi.string().required(),
    author: Joi.string().required(),
    publisher: Joi.string().required(),
    pages: Joi.number().integer(),
});

export default bookSchema;
