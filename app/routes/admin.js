import Ember from 'ember';

export default Ember.Route.extend({
  actions : {
    saveArticle(params) {
      console.log(params);
      var newArticle = this.store.createRecord('article', params);
      newArticle.save();
      this.transitionTo('home');
    }
  }
});
