import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return {
            scientists: ['Marie Curie', 'Mae Jemison', 'Albert Hofmann']
        };
    }
});
