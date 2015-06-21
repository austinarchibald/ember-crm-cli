export default Ember.Controller.extend({
  statuses: ['new', 'in progress', 'closed', 'bad'],
  showUnsavedMessage: function() {
    return this.get('model.isDirty') && !this.get('model.isSaving');
  }.property('model.isDirty', 'model.isSaving'),

  actions: {
    saveChanges: function() {
      if (this.get('model.isDirty')) this.get('model').save();
    },
    delete: function(){
      var self = this;
      this.get('model').destroyRecord().then(function(){
        self.transitionToRoute('leads');
      });
    }
  }

});