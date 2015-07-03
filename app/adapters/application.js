import DS from 'ember-data';
import Configuration from 'project/config/environment';

var adapter = DS.RESTAdapter.extend({
  namespace: 'api/v1.13'
});

if (Configuration.FIXTURES.enabled) {
  adapter = DS.FixtureAdapter.extend({
    queryFixtures: function(fixtures, query) {
      var properties = Object.keys(query);

      console.log(properties, query);

      // adding pagination support
      if (properties.contains('offset')) {
        fixtures = fixtures.slice(query.offset, query.offset + query.limit);
      }

      // find by id
      if (properties.contains('id')) {
        fixtures = _.where(fixtures, {
          id: query.id.toString()
        });
      }

      return fixtures || [];
    }
  });
}

export default adapter;

// export default DS.RESTAdapter.extend({
//   namespace: 'api/v1.13',
//   ajaxOptions: function(url, type, options) {
//     var hash = this._super(url, type, options);
//     hash.xhrFields = {
//       withCredentials: true
//     };
//     hash.crossDomain = true;
//     return hash;
//   },
//   buildURL: function(modelName, id, snapshot, requestType, query) {
//     var s = this._super(modelName, id);
//     return s + "?sid=76f4c554e17840c09d3235fb9dd266a3&hub_id=2faa109a-5790-4c3b-89eb-69ec25189e00";
//   },
// });
