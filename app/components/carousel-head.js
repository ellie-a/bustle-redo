import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Ember.$('.carousel.carousel-slider').carousel({full_width: true});
  }
});
