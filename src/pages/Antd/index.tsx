import { ClearOutlined, EyeOutlined, RedoOutlined, UndoOutlined } from "@ant-design/icons"
import { PageContainer } from "@ant-design/pro-components"
import { Button, Col, Drawer, DrawerProps, Layout, Radio, RadioChangeEvent, Row, Space, Tooltip } from "antd"
import React, { useState } from "react"
import style from "./index.css"
import AsideLeft from "@/components/Aside/AsideLeft"
import AsideRight from "@/components/Aside/AsideRight"
import CanvasMain from "@/components/CanvasMain/CanvasMain"
import { IDndManager } from "@/services/dragable"
const { Header, Footer, Sider, Content } = Layout;




const DesignEditor: React.FC = () =>{
  // const [screenSize, setScreenSize] = useState<ScreenSize>(ScreenSize.PC)


  // const [open, setOpen] = useState(false);
  // const [placement, setPlacement] = useState<DrawerProps['placement']>('left');

  // const showDrawer = () => {
  //   setOpen(true);
  // };

  // const onClose = () => {
  //   setOpen(false);
  // };

  // const onChange = (e: RadioChangeEvent) => {
  //   setPlacement(e.target.value);
  // };

  // const handleStart  = (e: Event, data: DraggableData)=>{
  //   console.log('start',data)
  // }

  // const handleDrag = (e: Event, data: DraggableData)=>{
  //   console.log('dragging',data)

  // }

  // const handleStop = (e: Event, data: DraggableData)=>{
  //   console.log('stop',data)

  // }



    return (<>
      <Row className="antdWrapper">
        <Col span={4} className="antdAsideL">
          <AsideLeft></AsideLeft>
        </Col>
        <Col span={16} className="antdCanvasMain">
          <CanvasMain></CanvasMain>
        </Col>
        <Col span={4} className="antdAsideR">
          <AsideRight></AsideRight>
        </Col>
      </Row>
      {/* <Layout className={style.antdWrapper}>
        <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }} className={style.headerStyle}>H</Header>
        <Layout>
          <Sider className={style.antdWrapper} collapsible>S1111111111111111111111</Sider>
          <Content>C</Content>
          <Sider className={style.antdWrapper} collapsible>S22222222222222222222222</Sider>
        </Layout>
      </Layout> */}


    {/* <PageContainer style={{background: '#eee'}}>
      <Radio.Group value={screenSize} onChange={(e) => setScreenSize(e.target.value)}>
        <Tooltip title="PC">
          <Radio.Button value={ScreenSize.PC} onClick = {()=>{console.log("handel PC")}}>Large</Radio.Button>
        </Tooltip>
        <Tooltip title="Pad">
          <Radio.Button value={ScreenSize.Pad} onClick = {()=>{console.log("handel Pad")}}>Default</Radio.Button>
        </Tooltip>
        <Tooltip title="Phone">
          <Radio.Button value={ScreenSize.Phone} onClick = {()=>{console.log("handel Phone")}}>Small</Radio.Button>
        </Tooltip>
      </Radio.Group>
        <span>  |  </span>
      <Tooltip title="uodo">
          <Button icon={<UndoOutlined />} onClick = {()=>{console.log("handel uodo")}}></Button>
      </Tooltip>
      <Tooltip title="redo">
        <Button icon={<RedoOutlined />} onClick = {()=>{console.log("handel redo")}}></Button>
      </Tooltip>
      <Tooltip title="clear">
        <Button icon={<ClearOutlined />} onClick = {()=>{console.log("handel redo")}}></Button>
      </Tooltip>
      <Tooltip title="view">
        <Button icon={<EyeOutlined />} onClick = {()=>{console.log("handel redo")}}></Button>
      </Tooltip>




      <Space>
      <Radio.Group value={placement} onChange={onChange}>
        <Radio value="top">top</Radio>
        <Radio value="right">right</Radio>
        <Radio value="bottom">bottom</Radio>
        <Radio value="left">left</Radio>
      </Radio.Group>


      </Space>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>

      <Row className={style.rowTest}>
        <Col span={24}></Col>
      </Row>
    </PageContainer>
      <Draggable
          // axis="x"
          handle=".handle"
          defaultPosition={{x: 0, y: 0}}
          // position={null}
          grid={[25, 25]}
          scale={1}
          onStart={handleStart}
          onDrag={handleDrag}
          onStop={handleStop}>
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>

      <Draggable
        // axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        // position={null}
        grid={[25, 25]}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
        >
        <div>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
        </div>
      </Draggable>

      <Draggable>
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
      </Draggable>

      <Draggable
        // axis="x"
        handle=".handle"
        defaultPosition={{x: 0, y: 0}}
        // position={null}
        grid={[25, 25]}
        scale={1}
        onStart={handleStart}
        onDrag={handleDrag}
        onStop={handleStop}
        >
          <div  style={{width: '200px', height: '200px', 'background': 'pink'}}>
          <div className="handle">Drag from here</div>
          <div>This readme is really dragging on...</div>
          <Button type="primary" onClick={showDrawer}>
            Open
          </Button>
        </div>
      </Draggable> */}
    </>);
}

export default DesignEditor;


export enum ScreenSize {
  PC,
  Pad,
  Phone
}
