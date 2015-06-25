import Ember from 'ember';

export default Ember.Route.extend({
  route: "/",
  redirect: function () {
    this.transitionTo('dashboard');
  }
});
