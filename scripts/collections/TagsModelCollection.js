var Backbone = require('backbone');
var TagsModel = require('../models/TagsModel');

module.exports = Backbone.Collection.extend({
  model: TagsModel
})
