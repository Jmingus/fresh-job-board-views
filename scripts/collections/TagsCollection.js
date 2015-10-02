var Backbone = require('backbone');
var TagsModel = require('../models/TagsModel');

module.exports = Backbone.Collection.extend({
  model: TagsModel,
  url: 'https://jmingus-server.herokuapp.com/collections/tags.1'
})
