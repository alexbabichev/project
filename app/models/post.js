import DS from 'ember-data';

var Post = DS.Model.extend({
  post_description: DS.attr('string'),
  post_id: DS.attr('string')
});

export default Post;
