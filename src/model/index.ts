/**
 * 组件分组数据格式
 * @property {string} groupType 组件分组类型
 * @property {string} title 组件分组标题
 * @property {IConfigComponentItem[]} list 分组包含的组件项列表
 * @export
 * @interface IComponentGroup
 */
export interface IConfigComponentGroup {
  groupType: string;
  title: string;
  list: IConfigComponentItem[];
}


/**
 * 组件默认数据格式
 * @property {string} title 左侧工具栏组件的显示名称
 * @property {string} icon 组件的前缀图标
 * @property {IConfigComponentItemInfo} domInfo 组件的dom信息
 * @export
 * @interface IConfigComponentItem
 */
export interface IConfigComponentItem {
  title: string;
  icon: string;
  domInfo: IConfigComponentItemInfo;
}

export interface IConfigComponentItemInfo {
  tag: string;
  title: string;
  slots: boolean;
  canMove: boolean;
  canAllowTo: boolean;
  ClearStyle: boolean;
  tagSlots: {
    enable: boolean;
    val: any;
  };
  childrens: IConfigComponentItemInfo[];
  props: IConfigComponentItemProps;
  extProps?: { [key: string]: IDomExtProps };
  classAttr?: IClassAttr;
  eventAttr?: IEventAttr;
  v_model?: "";
  compatibility?: boolean; //有些组件无法拖动可设置兼容性 会在组件上层包裹一层div
}

export interface IConfigComponentItemProps {
  [key: string]: {
    type: string;
    default: any;
    source?: IConfigComponentItemPropsSource;
    title: string;
    tips: string;
    options?: { value: any; label: string }[];
    config?: IConfigComponentItemProps;
  };
}

//数据源来源 本地 远程 变量 待开发
export enum IConfigComponentItemPropsSource {
  Local = "Local",
  Remote = "Remote",
  variable = "Variable",
}

export enum IDomExtProps {
  ChangeChildrenCount = "ChangeChildrenCount", //可以改变插槽内子元素个数最小为1
}

export interface IClassAttr {
  global: string[];
  custom?: {
    [key: string]: string;
  };
}

export interface IEventAttr {
  [key: string]: {
    custom: boolean;
    tips: string;
    val: string;
    anonymous_params: string[];
    list: string[];
  };
}
