var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
  defaults: {
    id: null,
    company_name: '',
    company_logo: '',
    background_image: '',
    company_size: 0,
    company_location: ''
  }
})
