var Backbone = require('backbone');
var JobListing = require('../models/JobListingModel');

module.exports = Backbone.Collection.extend({
  model: JobListing,
  url: 'https://jmingus-server.herokuapp.com/collections/fresh-job'
})
