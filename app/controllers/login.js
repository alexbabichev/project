import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    login: function() {
      var self = this;
      self.set('isExpanded', true);
      self.get('session')
          .authenticate('authenticator:custom', {username: self.username, password: self.password})
          .then(function (data) {

              console.log(data);
            // console.log(self.get('session').restore(data: ?), data);
            // self.route('posts');
            // var user = self.store.find('user', {});
            // console.log('post', self.store.find('post', {}));
          })
          .catch(function (err) {
            self.set('error', err);
          });
    },
  }
});
