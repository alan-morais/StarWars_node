const express = require('express');
const Planet = require('../models/Planet')
const planetsRouter = express.Router();
const planetsController = require('../controllers/planetsController')(Planet);

planetsRouter.route('')
    .get(planetsController.get)
    .post(planetsController.add)

planetsRouter.route('/:id')
    .get(planetsController.getById)
    .put(planetsController.update)
    .delete(planetsController.del)

module.exports = planetsRouter;