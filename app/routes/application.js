import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class ApplicationRoute extends Route {
  @inject store;

  model() {
    // Uncomment this to witness ED's magic tracking
    // return { name: 'List 1', items: Ember.A([]) };

    return this.store.createRecord('list', { name: 'List 1' });
  }

  setupController(controller, model) {
    controller.list = model;
  }
}
