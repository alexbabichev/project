import Base from 'simple-auth/authorizers/base';

import Ember from 'ember';

export default Base.extend({
  // authorize: function(jqXHR, requestOptions) {
  //   console.log(jqXHR, requestOptions);
  // }
  header: function() {
    return `Token token="${this.get('session.accessToken')}"`;
  }.property('session.accessToken'),

  authorize: function(jqXHR) {
    if (!Ember.isBlank(this.get('session.accessToken'))) {
      jqXHR.setRequestHeader('Authorization', this.get('header'));
      jqXHR.setRequestHeader('Cookie', '1234lkj1sdfguihsidfugh');
    }
  }
});
