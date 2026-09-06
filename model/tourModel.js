const fs = require('fs');
const path = require('path')
const toursFilePath = path.join(__dirname, '../data/tours.json');

const getAll = () => {
    const tourData = fs.readFileSync(toursFilePath, 'utf-8')
    return JSON.parse(tourData)
}

const getById = (id) => {
    const tours = getAll();
    const index = tours.findIndex(tour => tour.id === id);
    if (index === -1){
        return null
    }

}

const getByQuery = (query) => {
    const tours = getAll();
    return tours.filter(tour => tour.name.includes(query)
    );
};
const save = (newTours) => {
    const tours = getAll();
    tours.push(newTours);
    fs.writeFileSync(toursFilePath, JSON.stringify(tours));
}

const updateTour = (id, updatedTour) => {
    const tours = getAll();
    const index = tours.findIndex(tour => tour.id === id);
    if (index === -1) {
        return null;
    }
    tours[index] = {id, ...updatedTour };
    fs.writeFileSync(toursFilePath, JSON.stringify(tours));
    return tours[index];
}
const deleteTour = (id) => {
    const tours = getAll();
    const index = tours.findIndex(tour => tour.id === id);
    if (index === -1) {
        return null;
    }
    tours.splice(index, 1);
    fs.writeFileSync(toursFilePath, JSON.stringify(tours));
    return { message: 'Tour deleted successfully' };
};

module.exports = {
    getAll,
    getById,
    getByQuery,
    save,
    updateTour,
    deleteTour
};