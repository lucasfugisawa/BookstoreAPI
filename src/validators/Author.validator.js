import countries from 'i18n-iso-countries';
import Joi from 'joi';

const authorSchema = Joi.object({
    name: Joi.string().required(),
    country: Joi.custom((value, helper) => {
        if (countries.isValid(value)) {
            return true;
        } else {
            return helper.message("country must be a valid ISO 3166-1 Alpha-2 or Alpha-3 country code.");
        }
    }),
});

export default authorSchema;
