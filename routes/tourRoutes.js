const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');
router.get('/tours/', tourController.getAllTours);
router.get('/tours/:id', tourController.getTourById);
router.get('/tours/search', tourController.getToursByQuery);
router.post('/tours', tourController.saveTours);
router.put('/tours/:id', tourController.updateTour);
router.delete('/tours/:id', tourController.deleteTourByID);

module.exports = router;