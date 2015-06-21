import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: 'auto',
  rootURL: '/'
});

export default Router.map(function() {
  this.resource('leads', { path: '/' }, function() {
    this.route('new');
    this.resource('lead', { path: '/leads/:id' }, function() {
      this.route('edit');
    })
  })
});