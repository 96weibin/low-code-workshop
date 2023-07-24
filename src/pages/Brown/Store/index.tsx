// 组合子模块
// 封装统一导出供业务使用的方法
import React from 'react';
import { CounterStore } from './couterStore';
import { DragItemStore } from './dragItemStore'

class RootStore {
  public counterStore: CounterStore;
  public dragItemStore: CounterStore;
  constructor() {
    // 对子模块进行实例化操作
    this.counterStore = new CounterStore();
    this.dragItemStore = new DragItemStore();
  }
}
// 实例化
const rootStore = new RootStore();
const context = React.createContext(rootStore);

const useStore = () => React.useContext(context);
export { useStore };