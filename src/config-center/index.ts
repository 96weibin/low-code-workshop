import { IConfigComponentGroup } from "@/model";
import { AntdBasicGroup } from "./antdesign/basic";

const antdConfigCenter: IConfigComponentGroup[] = Object.seal([AntdBasicGroup]);

export const configCenter:{[key:string]:IConfigComponentGroup[]} = {
  // element: elementConfigCenter,
  antd: antdConfigCenter,
  // EChart: EchartsConfigCenter,
  // 原生: NativeConfigCenter,
  // 自定义: customConfigCenter,
};
// const elementConfigCenter: IConfigComponentGroup[] = Object.seal([
//   ElLayoutGroup,
//   ElBasicGroup,
//   ElFormGroup,
// ]);
