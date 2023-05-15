import { Component } from "react";

export enum EDragResultStatus {
  DRAG,
  DROP,
  CANCEL,
  NONE
}

export type sourceId = string | null;
export type targetId = string | null;
export type dropMode = DataTransfer['dropEffect'];
export type source = any;
export type target = any;


export type sourceMap = Record<string, source>;
export type targetMap = Record<string, target>;

export interface IResult {
  sourceId: sourceId;
  targetId: targetId;
  status: EDragResultStatus;
  hoverId: targetId;
}

export interface IDndManager {
  dropMode: dropMode;
  sourceMap: sourceMap;
  targetMap: targetMap;
  result?: IResult;
  changeResult?: (result: Partial<IResult>) => void;
  addSource: (sourceId: sourceId, source: source) => void;
  removeSource: (sourceId: sourceId) => void;
  addTarget: (targetId: targetId, target: target) => void;
  removeTarget: (targetId: targetId) => void;
}

interface Props {
  children: React.ReactNode;
  onDragEnd: (result: IResult) => void;
  dropMode?: dropMode;
}

interface State {
  dropMode: dropMode;
  sourceMap: sourceMap;
  targetMap: targetMap;
  result: IResult;
}

export default class DndManager extends Component<Props, State> {
  // value of Context 
  state: State = {
    dropMode: this.props.dropMode || 'move',
    sourceMap: {},
    targetMap: {},
    result: {
      targetId: null,
      sourceId: null,
      status: EDragResultStatus.NONE,
      hoverId: null,
    },
  };
}

