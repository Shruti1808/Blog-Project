import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    posts: this.store.findAll('post').then(results => results.sortBy('timestamp').reverse()),
    reviews: this.store.findAll('review')
  });
},

  // model(){
  //   return this.store.findAll('post').then(results => results.sortBy('date').reverse());
  // },
  //
  // model(){
  //   this.store.query('post', {orderBy: 'title', equalTo: 'Bridal hairstyle'}).then(function(posts){
  //     return posts;
  //   });
  // },

    actions: {
      savePost3(params) {
        var newPost = this.store.createRecord('post', params);
        newPost.save();
        this.transitionTo('dashboard');
      },
  }
});
