import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        image: this.get('image'),
        author: this.get('author'),
        description: this.get('description'),
        date: this.get('date'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
