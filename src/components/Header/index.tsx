import { Button, Radio, Space, Tooltip } from 'antd'
import { ClearOutlined, EyeOutlined, RedoOutlined, SearchOutlined, UndoOutlined } from '@ant-design/icons';
import { useState } from 'react';

const Header: React.FC = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(ScreenSize.PC)

  return (
    <>
      {/* <Space wrap>
            <h1>header</h1>
            <Button type='primary'>primary</Button>
            <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>


        </Space> */}

      {/* todo 添加 icon */}
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
      {/* TODO 分割线 */}
      <Tooltip title="uodo">
          <Button icon={<UndoOutlined />} onClick = {()=>{console.log("handel uodo")}}></Button>
      </Tooltip>
      <Tooltip title="redo">
        <Button icon={<RedoOutlined />} onClick = {()=>{console.log("handel redo")}}></Button>
      </Tooltip>
      <Tooltip title="clear">
        <Button icon={<ClearOutlined />} onClick = {()=>{console.log("handel redo")}}></Button>
      </Tooltip>
      <Tooltip title="preview">
        <Button icon={<EyeOutlined />} onClick = {()=>{console.log("handel redo")}}></Button>
      </Tooltip>
      
    </>
  );
}

export default Header;

export enum ScreenSize {
  PC,
  Pad,
  Phone
}