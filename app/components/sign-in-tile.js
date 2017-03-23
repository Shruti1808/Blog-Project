import Ember from 'ember';

export default Ember.Component.extend({
  isSignUpShowing: false,
  isLogInShowing: false,
  logInShows: true,
  signInShows: true,
  actions: {

    signUpShow: function() {
      this.set('isSignUpShowing', true);

      this.toggleProperty('logInShows');
    },
    logInShow: function() {
      this.set('isLogInShowing', true);
      this.toggleProperty('signInShows');
    }
  }
});
