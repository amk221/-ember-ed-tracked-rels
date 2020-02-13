import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { A as emberA } from '@ember/array';

export default class ApplicationRoute extends Route {
  @inject store;

  model() {
    // return { name: 'Ember Array List', items: emberA() };

    return this.store.createRecord('list', { name: 'Record Array List' });
  }

  setupController(controller, model) {
    controller.list = model;
  }
}
