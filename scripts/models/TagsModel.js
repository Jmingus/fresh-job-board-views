var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
  defaults: {
    id: null,
    tag_name: ''
  },
  idAttribute: '_id',
  urlRoot: 'https://jmingus-server.herokuapp.com/collections/tags.1'
})
