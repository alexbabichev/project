import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model){
    this._super(controller, model);

    Ember.run.scheduleOnce('afterRender', function(){
      sortable();
    });
  },
  breadCrumb: {
    title: 'Quadrupeds'
  }
});

function sortable() {
  Ember.$( ".ui-sortable" ).sortable({
    connectWith: ".connectedSortable",
    placeholder: "sort-highlight",
    handle: ".box-header, .nav-tabs",
    forcePlaceholderSize: true,
    zIndex: 999999
  }).disableSelection();
}
