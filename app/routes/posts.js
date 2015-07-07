import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('post', {id: 1});
  },
  afterModel: function(){
    var self = this;
    setTimeout(function () {
      self.controller.set('isLoading', false);
    }, 1500);
  }
});
