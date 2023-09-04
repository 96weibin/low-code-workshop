import { makeAutoObservable } from 'mobx';
import { v4 as uuidv4 } from "uuid";
import { IContainer } from '../DragComponent/DragInterface';
class DragItemStore {

  public type: string = '';
  public box :any= [];
  public container: IContainer[]=[];
  constructor() {

    makeAutoObservable(this);
  }

  //

  add = (x:string) => {

    this.type = x;
    let uid = uuidv4();
    
    this.container.push({ type: x, id: uid });

  };


  handleToContent = (item: any) => {
    console.log(item);
    
    let uid = uuidv4(); 
    this.box.push({ type: 1, id: uid });

    console.log(this.box);
    
  }

  handleToNav = (item: any) => {
    
    // this.box.push(item);
  }
}

export { DragItemStore };