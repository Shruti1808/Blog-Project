import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    posts: this.store.findAll('post').then(results => results.sortBy('date').reverse()),
    reviews: this.store.findAll('review')
  });
},

  // model(){
  //   return this.store.findAll('post').then(results => results.sortBy('date').reverse());
  // },

  // model(){
  //   this.store.findAll('post').then(function(posts) {
  //     return posts.({filter: {title: 'Bridal'}});
  //   });
  // },

    actions: {
      savePost3(params) {
        var newPost = this.store.createRecord('post', params);
        newPost.save();
        this.transitionTo('dashboard');
      },
        saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      this.transitionTo('dashboard');
    }
  }
});
