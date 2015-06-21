import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api/v1',
  headers: {
        "X-CSRF-Token": $('meta[name="csrf-token"]').attr('content')
      }
});