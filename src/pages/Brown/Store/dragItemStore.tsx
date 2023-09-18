import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from "uuid";
import { IBox, IContainer } from '../DragComponent/DragInterface';
class DragItemStore {

  public type: string = '';
  public box: IBox[] = [];
  public container: IContainer[] = [];
  constructor() {
    makeAutoObservable(this);
  }


  add = (x: string) => {
    this.type = x;
    let uid = uuidv4();
    this.container.push({ type: x, id: uid });
  };


  handleToContent = (item: IContainer, btn: string) => {
    let uid = uuidv4();
    this.box.push({ type: item.type, containerId: item.id, id: uid, btnType: btn });


  }

  deleteBox = (id: string) => {
    const index = this.box.findIndex(item => item.id === id);
    if (index !== -1) {
      this.box.splice(index, 1);
    }
  }

  handleToNav = (item: any) => {
    // let uid = uuidv4(); 
    // this.box.push({ type: item.type, id: uid });
    // console.log(this.box);
  }
}

export { DragItemStore };