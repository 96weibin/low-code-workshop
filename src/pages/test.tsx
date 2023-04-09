import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Button, Card, Radio, Tooltip, theme } from 'antd';
import React, { useState } from 'react';
import { Line } from '@ant-design/charts';
import { ClearOutlined, EyeOutlined, RedoOutlined, UndoOutlined } from '@ant-design/icons';

const Page: React.FC = () => {
  const data = [
    { year: '1991', value: 3 },
    { year: '1992', value: 4 },
    { year: '1993', value: 3.5 },
    { year: '1994', value: 5 },
    { year: '1995', value: 4.9 },
    { year: '1996', value: 6 },
    { year: '1997', value: 7 },
    { year: '1998', value: 9 },
    { year: '1999', value: 13 },
  ];
  const config = {
    data,
    height: 400,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return <Line {...config} />;
};

const ComponentA: React.FC<{  //props
  title: string;
  index: number;
  onPlus: Function;   // 父级回调
 }> = ({ title, index, onPlus }) => {

  let [countState, setCount] = useState(index)  //state

  return (
    <div
      style={{
        background: 'rgba(0, 0, 0, .5)',
        width: '200px',
        height: '100px',
      }}
    >
      <h1>{title}</h1>
      <button onClick={()=>{
        setCount(countState += 1);
        onPlus(countState)
        }}>{title + countState}</button>
        <Page />
    </div>
  );
};

const Test: React.FC = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(ScreenSize.PC)
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  let value1 = 'father'
  const handelPlus = (value: string)=>{
    console.log(value);
    console.log(value1);
  }
  return (
    <>
    <PageContainer>
      <Card
        style={{
          borderRadius: 8,
        }}
        bodyStyle={{
          backgroundImage:
            initialState?.settings?.navTheme === 'realDark'
              ? 'background-image: linear-gradient(75deg, #1A1B1F 0%, #191C1F 100%)'
              : 'background-image: linear-gradient(75deg, #FBFDFF 0%, #F5F7FF 100%)',
        }}
      >
        <h1>test</h1>
        <ComponentA title={'handel test'} index={0} onPlus={
          handelPlus.bind(this)} />
      </Card>
    </PageContainer>
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
      <Tooltip title="clear">
        <Button icon={<ClearOutlined />} onClick = {()=>{console.log("handel redo")}}></Button>
      </Tooltip>
      <Tooltip title="clear">
        <Button icon={<EyeOutlined />} onClick = {()=>{console.log("handel redo")}}></Button>
      </Tooltip>
    </>

  );
};

export default Test;

export enum ScreenSize {
  PC,
  Pad,
  Phone
}


