import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class ApplicationController extends Controller {
  @inject store;

  count = 1;

  get subset() {
    return this.list.items.filter(item => {
      return item.name === 'Item 1';
    });
  }

  @action
  addItem() {
    const item = this.store.createRecord('item', {
      name: `Item ${this.count++}`
    });

    this.list.items.addObject(item);
  }
}
