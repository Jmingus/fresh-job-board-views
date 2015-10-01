var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
  defaults: {
    id: null,
    job_position: '',
    date_created: null,
    employer: '',
    job_location: '',
    description: ''
  },
  idAttribute: '_id',
  urlRoot: "https://jmingus-server.herokuapp.com/collections/fresh-jobs"
})
