import { configCenter } from '@/config-center';
import { IConfigComponentGroup } from '@/model';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Nav from '../DragComponent/Nav';

const AntDPage: React.FC = () => {
  // antd JSON 数据初始化 leftAside
  const config_center: IConfigComponentGroup[] = configCenter.antd;

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Nav></Nav>
      </DndProvider>
    </>
  );
};

export default AntDPage;

export enum ScreenSize {
  PC,
  Pad,
  Phone,
}
