import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('foo');
  this.route('login');
  this.route('posts');
  this.route('dashboard');
});

export default Router;
