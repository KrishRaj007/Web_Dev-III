const tourModel = require('../model/tourModel');

const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
};

module.exports = {
    getAllTours
};