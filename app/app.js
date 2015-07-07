import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

Ember.deprecate = function(){};

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

Ember.fade = {
  willAnimateIn: function() {
    this.$().css("opacity", 0);
  },

  animateIn: function(done) {
    this.$().fadeTo(500, 1, done);
  },

  animateOut: function(done) {
    this.$().fadeTo(500, 0, done);
  }
};

loadInitializers(App, config.modulePrefix);

export default App;
