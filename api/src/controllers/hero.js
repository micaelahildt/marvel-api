const {Hero} = require('../db');
const ModelCrud = require('./index');
const heroModel = new ModelCrud(Hero);

module.exports = heroModel;
