import DS from 'ember-data';

var Post = DS.Model.extend({
  post_description: DS.attr('string'),
  post_id: DS.attr('string'),
  // dates
  created_date: DS.attr('string'),
  publish_date: DS.attr('string'),
  // data: hasmany
  // author: DS.belongsTo('user'),
  author: DS.attr(),
  // data:
  post_type: DS.attr('string'),
  post_data: DS.attr(),
  // counters
  comment_count: DS.attr('string'),
  like_count: DS.attr('string'),
});

export default Post;
