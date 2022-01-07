const Joi = require("joi");
const newUserValidator = (req, res, next) => {
  const Schema = Joi.object({
    FirstName: Joi.string().required(),
    LastName: Joi.string().required(),
    Email: Joi.string().email().required(),
    Password: Joi.string().min(3).max(8).required().label("Password"),
  });
  const {
    error,
    value
  } = Schema.validate(req.body);

  if (error) {
    next(error);
  } else {
    req.validatedBody = value;

    next();
  }
};
module.exports = newUserValidator;