const fs = require('fs');
const path = require('path')
const toursFilePath = path.join(__dirname, '../data/tours.json');

const getAll = () => {
    const tourData = fs.readFileSync(toursFilePath, 'utf-8')
    return JSON.parse(tourData)
}

const getById = (id) => {
    const tours = getAll();
    return tours.find(tour => tour.id === id);
}

const getByQuery = (query) => {
    const tours = getAll();
    return tours.filter(tour => tour.name.includes(query)
    );
};

module.exports = {
    getAll,
    getById,
    getByQuery
};