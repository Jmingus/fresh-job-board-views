var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
    defaults: {
      id: null,
      job_id: null,
      tag_id: null
    },
    urlRoot: 'https://jmingus-server.herokuapp.com/collections/jobstags'
})
