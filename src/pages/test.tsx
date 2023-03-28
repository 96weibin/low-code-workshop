import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, theme } from 'antd';
import React, { useState } from 'react';

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
    </div>
  );
};

const Test: React.FC = () => {
  const { token } = theme.useToken();
  const { initialState } = useModel('@@initialState');
  let value1 = 'father'
  const handelPlus = (value: string)=>{
    console.log(value);
    console.log(value1);
  }
  return (
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
  );
};

export default Test;
