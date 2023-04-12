import { Button, Col, Drawer, DrawerProps, Layout, Radio, RadioChangeEvent, Row, Space, Tooltip } from "antd"
import React, { useState } from "react"
import { configCenter } from '@/config-center';
import style from "./index.css"
import AsideLeft from "@/components/Aside/AsideLeft"
import AsideRight from "@/components/Aside/AsideRight"
import CanvasMain from "@/components/CanvasMain/CanvasMain"
import { IDndManager } from "@/services/dragable"
import { HTML5Backend } from "react-dnd-html5-backend"
import { DndProvider } from 'react-dnd'
import { IConfigComponentGroup } from "@/model"

const AntDPage: React.FC = () => {

  // antd JSON 数据初始化 leftAside
  const config_center: IConfigComponentGroup[] = configCenter.antd;

  return (<>
    <DndProvider backend={HTML5Backend}>
      <Row className="antdWrapper">
        <Col span={4} className="antdAsideL">
          <AsideLeft config_center={config_center}></AsideLeft>
        </Col>
        <Col span={16} className="antdCanvasMain">
          <CanvasMain></CanvasMain>
        </Col>
        <Col span={4} className="antdAsideR">
          <AsideRight></AsideRight>
        </Col>
      </Row>
    </DndProvider>
  </>);
}

export default AntDPage;


export enum ScreenSize {
  PC,
  Pad,
  Phone
}
