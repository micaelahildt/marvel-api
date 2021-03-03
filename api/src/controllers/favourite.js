const {Favourite} = require('../db');
const ModelCrud = require('./index');
const favouriteModel = new ModelCrud(Favourite);

module.exports = favouriteModel;
