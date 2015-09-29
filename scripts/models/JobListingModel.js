var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
  defaults: {
    id: null,
    job_position: '',
    date_created: null,
    employer: '',
    job_location: '',
    description: ''
  }
})
