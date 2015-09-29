var Backbone = require('backbone');
var CompanyModel = require('../models/CompanyModel');

module.exports = Backbone.Collection.extend({
  model: CompanyModel
})
