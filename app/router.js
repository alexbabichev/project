import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('login');
  this.route('posts', function(){});
  this.route('dashboard', function(){});
  this.route('community');
  this.route('users');
  this.route('analitics');
  this.route('media');
});

export default Router;
