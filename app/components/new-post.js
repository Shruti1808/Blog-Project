import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },

    savePost1() {
      var params = {
        author: this.get('author'),
        image: this.get('image'),
        title: this.get('title'),
        description: this.get('description'),
        date: this.get('date'),
      };
      this.set('addNewPost', false);
      this.sendAction('savePost2', params);
    }
  }
});
