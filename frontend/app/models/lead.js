import DS from "ember-data";

export default DS.Model.extend({
    first_name: DS.attr('string'),
    last_name: DS.attr('string'),
    email: DS.attr('string'),
    phone: DS.attr('string'),
    status: DS.attr('string', { defaultValue: 'new'}),
    notes: DS.attr('string'),
    fullName: function() {
        return this.get('first_name') + ' ' + this.get('last_name');
    }.property('first_name', 'last_name')
}).reopenClass({
    valid: function(fields){
        return fields.first_name && fields.last_name;
    }
});