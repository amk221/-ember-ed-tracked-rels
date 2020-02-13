import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default class ApplicationRoute extends Route {
  @inject store;

  model() {
    // return { name: 'List 1', items: Ember.A([]) };
    return this.store.createRecord('list', { name: 'List 1' });
  }

  setupController(controller, model) {
    controller.list = model;
  }
}
