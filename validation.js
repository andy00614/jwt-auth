const Joi = require('@hapi/joi')


const registerValidation = (target) => {
  const schema = {
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  }
  const result = Joi.object(schema).validate(target)
  return result
}

const loginValidation = (target) => {
  const schema = {
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  }
  return Joi.object(schema).validate(target)
}

module.exports.registerValidation = registerValidation
module.exports.loginValidation = loginValidation