import { makeAutoObservable } from 'mobx';
class DragItemStore {
  // 1.定义数据
  count = 0;
  constructor() {

    makeAutoObservable(this);
  }

  //

  add = () => {
    this.count++;
  };
}

export { DragItemStore };