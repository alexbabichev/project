import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

import Ember from 'ember';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    error: function(error, transition) {
      console.log(error, transition);
      if (error && error.status === 400) {
        // error substate and parent routes do not handle this error
        return this.transitionTo('modelNotFound');
      }

      // Return true to bubble this event to any parent route.
      return true;
    }
  }
});
