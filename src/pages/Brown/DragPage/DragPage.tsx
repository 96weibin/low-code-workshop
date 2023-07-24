import { configCenter } from '@/config-center';
import { IConfigComponentGroup } from '@/model';
import { Space } from 'antd';
import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import ContentPage from '../DragComponent/ContentPage/ContentPage';
import Nav from '../DragComponent/Nav/Nav';
const spaceStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
};
const AntDPage: React.FC = () => {
  // antd JSON 数据初始化 leftAside
  const config_center: IConfigComponentGroup[] = configCenter.antd;

  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Space direction="vertical" style={spaceStyle} size={[0, 48]}>
          <Nav></Nav>
          <ContentPage></ContentPage>
        </Space>
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
