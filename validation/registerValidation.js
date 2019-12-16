const { body, validationResult } = require('express-validator');

const registerValidation = () => {
  return [
    body('password').isLength({ min: 5 }),
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}

module.exports = {
registerValidation,
  validate,
}

/*const Validator = require("express-validator");
const isEmpty = require("is-empty");

module.exports = function validateRegister(data) {
    let errors = {};

    data.username = !isEmpty(data.username) ? data.username: "";
    data.password = !isEmpty(data.password) ? data.password: "";
    data.profile = !isEmpty(data.profile) ? data.profile:  "";

    if(Validator.isEmpty(data.username)){
        errors.username = "Username field is required.";
    }
    
    if(Validator.isEmpty(data.password)){
        errors.password = "Password field is required.";
    }

    if(Validator.isEmpty(data.profile)){
        errors.profile = "Profile field is required.";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}*/