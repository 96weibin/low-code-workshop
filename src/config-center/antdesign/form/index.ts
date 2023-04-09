import { IConfigComponentGroup } from "@/model";
import { D_ElCheckbox, D_ElCheckboxGroup } from "./checkbox"
import { D_ElInput } from "./input"

export const AntdFormGroup: IConfigComponentGroup = {
  groupType: "from",
  title: "表单组件",
  list: [D_ElCheckbox, D_ElCheckboxGroup, D_ElInput],
};
