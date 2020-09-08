let router = require('express').Router();
let ExercisesController = require('./controller/ExercisesController')


router.get('/exercises', ExercisesController.GetAll);

module.exports = router