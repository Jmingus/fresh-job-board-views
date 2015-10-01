var Backbone = require('backbone');
var JobsTagsModel = require('../models/JobsTagsModel');

module.exports = Backbone.Collection.extend({
  model: JobsTagsModel,
  url: ''
})
