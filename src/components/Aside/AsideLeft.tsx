import { configCenter } from '@/config-center';
import { IConfigComponentGroup, IConfigComponentItem } from '@/model';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Collapse, Layout, Space } from 'antd';
import React, { useState } from 'react';
import style from './AsideLeft.css';
const { Header, Footer, Sider, Content } = Layout;

const { Panel } = Collapse;

const sideStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  left: 0,
  top: '55px',
  bottom: 0,
};

const config_center: IConfigComponentGroup[] = configCenter.antd;

const DragItems = (list: IConfigComponentItem[]) => {
  return list.map((x, i) => {
    return (
      <Button key={i} type="primary" icon={<SearchOutlined />} className={style.DrgIcons}>
        {x.title}
      </Button>
    );
  });
}


const AntDPanels: JSX.Element[] = config_center.map((x: IConfigComponentGroup, i) => {
  return (
    <Panel header={x.title} key={i}>
      <Space direction={"vertical"}>
        {DragItems(x.list)}
      </Space>
    </Panel>
  );
});

const onChange = (key: string | string[]) => {
  console.log(key);
};

const AsideLeft: React.FC = () => {
  let [isOpenState, setIsOpen] = useState(true);

  return (
    <>
      <Sider style={sideStyle} collapsible theme="light">
        <Collapse
          defaultActiveKey={['0', '1', '2']}
          onChange={onChange}
          size="small"
          bordered={false}
        >
          {AntDPanels}
        </Collapse>
      </Sider>
    </>
  );
};

export default AsideLeft;
