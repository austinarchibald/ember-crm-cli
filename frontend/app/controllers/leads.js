export default Ember.ArrayController.extend({
    sortProperties: ['first_name', 'last_name'],
    leads: function(){
        return this.get('search') ? this.get('searchedLeads') : this;
    }.property('search', 'searchedLeads'),
    searchedLeads: function(){
        var search = this.get('search').toLowerCase();
        return this.filter(function(lead){
            return lead.get('fullName').toLowerCase().indexOf(search) != -1;
        });
    }.property('search', 'this.@each.fullName'),
});