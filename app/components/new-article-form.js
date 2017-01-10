import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveArticle() {
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        date: this.get('date'),
        excerpt: this.get('excerpt'),
        headline: this.get('headline'),
        photo: this.get('photo')
      };
      this.sendAction('saveArticle', params);
    }
  }
});
