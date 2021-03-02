const {Hero} = require('../db');
const ModelCRUD = require('./index');
const heroModel = new ModelCRUD(Hero);

module.exports = heroModel;
