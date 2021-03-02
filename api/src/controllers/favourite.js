const {Favourite} = require('../db');
const ModelCRUD = require('./index');
const favouriteModel = new ModelCRUD(Favourite);

module.exports = favouriteModel;
