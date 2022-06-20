const express = require('express');
const routes = express.Router();

const usersController = require('./controllers/users-controller');
const calculatorController = require('./controllers/calculator-controller');
const authController = require('./controllers/auth');

const authJwtToken = require('./middlewares/auth-validation-token');
const substractionValidation = require('./middlewares/substraction-valitation');
const sumValidation = require('./middlewares/sum-validation');
const divisionValidation = require('./middlewares/division-validation');

routes.get(
    '/usuarios',
    authJwtToken,
    usersController.getInfo
);

routes.post(
    '/usuarios',
    authJwtToken,
    usersController.save
);

routes.post(
    '/subtracao',
    authJwtToken,
    substractionValidation,
    calculatorController.substraction
);

routes.post(
    '/soma',
    authJwtToken,
    sumValidation,
    calculatorController.sum
);

routes.post(
    '/divisao',
    authJwtToken,
    divisionValidation,
    calculatorController.division
);
routes.post(
    '/auth',
    authController.authenticate
)


module.exports = routes;