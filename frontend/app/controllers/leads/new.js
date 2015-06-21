import LeadModel from 'frontend/models/lead';

export default Ember.Controller.extend({
    actions: {
        createLead: function(){
            var self = this;
            var fields = this.get('fields');
            if(LeadModel.valid(fields)){
                var lead = this.store.createRecord('lead', this.get('fields'));
                lead.save().then(function(){
                    self.transitionToRoute('lead', lead);
                });
            } else {
                this.set('showError', true);
            }
        }
    }
});