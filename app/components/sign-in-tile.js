import Ember from 'ember';

export default Ember.Component.extend({
  isSignUpShowing: false,
  isLogInShowing: false,

  actions: {
    signUpShow: function() {
      this.set('isSignUpShowing', true);
    },
    logInShow: function() {
      this.set('isLogInShowing', true);
    },
  }
});
