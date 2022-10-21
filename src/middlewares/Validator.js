import createHttpError from 'http-errors';
import Validators from '../validators/index.js';

const validator = (validator) => {
    if(!Validators.hasOwnProperty(validator))
        throw new Error(`Validator '${validator}' does not exist.`)

    return async function(req, res, next) {
        try {
            const validated = await Validators[validator].validateAsync(req.body);
            req.body = validated;
            next();
        } catch (err) {
            if(err.isJoi)
                return next(createHttpError(422, {message: err.message}));
            next(createHttpError(500));
        }
    }
}

export default validator;