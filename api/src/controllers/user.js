const {User} = require('../db');
const ModelCRUD = require('./index');
const userModel = new ModelCRUD(User);

module.exports = userModel;
