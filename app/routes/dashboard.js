import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('post').then(results => results.sortBy('date').reverse());
  },

  actions: {
    savePost3(params) {
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('dashboard');
    },
  }
});
