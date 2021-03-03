const {User} = require('../db');
const ModelCrud = require('./index');
const userModel = new ModelCrud(User);

module.exports = userModel;
