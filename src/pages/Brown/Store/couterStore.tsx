// counterStore.js
import { makeAutoObservable } from 'mobx';
class CounterStore {
  // 1.定义数据
  count = 0;
  constructor() {
    // 2. 把数据变成响应式
    makeAutoObservable(this);
  }

  //
  // 3. 定义action修改数据
  add = () => {
    this.count++;
  };
}
// // 4. 实例化
// const counterStore = new CouterStore();
// export { counterStore };
export { CounterStore };