const express = require('express');
const router = express.Router();
const tourCollector = require('../controller/tourController');
router.get('/tours', tourCollector.getAllTours);

module.exports = routers;