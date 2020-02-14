import Controller from '@ember/controller';
import { action } from '@ember/object';
import { A as emberA } from '@ember/array';
import { inject } from '@ember/service';

export default class ApplicationController extends Controller {
  @inject store;

  count = 1;

  init() {
    super.init(...arguments);

    // this.list = { name: 'Ember Array List', items: emberA() };
    this.list = this.store.createRecord('list', { name: 'Record Array List' });
  }

  get subset() {
    return this.list.items.filter(item => item.name === 'Item 1');
  }

  @action
  addItem() {
    const item = this.store.createRecord('item', {
      name: `Item ${this.count++}`
    });

    this.list.items.addObject(item);
  }
}
