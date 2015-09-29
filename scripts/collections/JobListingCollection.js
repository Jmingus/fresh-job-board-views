var Backbone = require('backbone');
var JobListing = require('../models/JobListing');

module.exports = Backbone.Collection.extend({
  model: JobListing
})
