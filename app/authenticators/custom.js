// app/authenticators/custom.js
import Base from 'simple-auth/authenticators/base';

import Ember from 'ember';

export default Base.extend({
  tokenEndpoint: 'api/v1.13/login',
  restore: function(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      if (!Ember.isEmpty(data.token)) {
        resolve(data);
      } else {
        reject();
      }
    });
  },
  authenticate: function(options) {
    var _this = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.ajax({
        url:         _this.tokenEndpoint,
        type:        'POST',
        data:        JSON.stringify(options),
        contentType: 'application/json',
        xhrFields: { withCredentials: true },
        crossdomain: true,
      }).then(function(response) {
        //Ember.run(function() {
        console.log(response);
          resolve({token: response.data.sid});
        //});
        //return response.data;
      }, function(xhr) {
        var response = JSON.parse(xhr.responseText);
        //Ember.run(function() {
          reject(response.error);
        //});
      });
    });
  },
  invalidate: function(data) {
    console.log('invalidate', data);
  }
});
