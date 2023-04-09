import { Button, Layout, Space } from "antd";
const { Header, Footer, Sider, Content } = Layout;
import style from "./AsideLeft.css"
import { Collapse } from 'antd';
import Draggable from "react-draggable";
import { IConfigComponentGroup, IConfigComponentItem } from "@/model";
import { configCenter } from '@/config-center';
import React, { useState } from "react";


const { Panel } = Collapse;

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: '55px',
  bottom: 0,
};


const config_center: IConfigComponentGroup[] = (configCenter.antd);


const DragIcons: React.FC<{
  data: IConfigComponentItem[]
}> = ({data})=>{
  return data.map(x => {
    return(<>
      <div>{x.title}</div>
      <div>{x.icon}</div>

    </>)
  })
}

const AntDPanels = config_center.map((x,i) =>{
  return (<>
    <Panel header={x.title} key={i}>
      <DragIcons data={x.list} />
    </Panel>
  </>)
})



const onChange = (key: string | string[]) => {
  console.log(key);
};

const AsideLeft: React.FC = ()=>{
  return(<>
  <Sider style={siderStyle} collapsible theme="light">
    <Collapse defaultActiveKey={['1',2,3]} onChange={onChange} size="small" bordered={false}>
    {AntDPanels}

      {/* <Panel header="布局" key="1">
        <Space direction="vertical">
        </Space>
      </Panel>
      <Panel header="基础" key="2">
        <p>布局</p>
      </Panel>
      <Panel header="表单组件" key="3">
        <p>布局</p>
      </Panel> */}
    </Collapse>
  </Sider>
  </>)
}

export default AsideLeft;
