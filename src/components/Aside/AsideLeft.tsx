import { IConfigComponentGroup, IConfigComponentItem } from '@/model';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Collapse, Layout, Space } from 'antd';
import React, { useContext, useState } from 'react';
import style from './AsideLeft.css';
import { DndProvider, useDrag } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import AntdContext from '@/pages/Antd/AntdContext';
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

const ItemTypes = {
  Button: 'button'
}


const DragItems: React.FC<{list: IConfigComponentItem[]}> = ({list}) => {
  let items = list.map((x, i) => {
    const [{isDragging}, drag] = useDrag(() => ({
      type: ItemTypes.Button,
      collect: monitor => ({
        isDragging: !!monitor.isDragging(),
      }),
    }))
    return (
      <Button ref={drag} key={i} type="primary" icon={<SearchOutlined />} className={style.DrgIcons} style={{opacity: isDragging ? 0.5 : 1,}}>
        {x.title}
      </Button>
    );
  });
  return (<div>{items}</div>)
}

const AntDPanels: React.FC = ()=>{
  let {config_center} = useContext(AntdContext);
  return (
    <Collapse
    defaultActiveKey={['0', '1', '2']}
    onChange={onChange}
    size="small"
    bordered={false}
    >
      {config_center.map((x: IConfigComponentGroup, i) => {
      return (
        <Panel header={x.title} key={i}>
        <Space direction={"vertical"}>
          <DragItems list={x.list}></DragItems>
        </Space>
      </Panel>
      )})}
    </Collapse>
    )
}


const onChange = (key: string | string[]) => {
  console.log(key);
};

const AsideLeft: React.FC<{config_center: IConfigComponentGroup[]}> = (config_center, panels) => {
  let [isOpenState, setIsOpen] = useState(true);

  return (
    <AntdContext.Provider value={config_center}>
      <Sider style={sideStyle} collapsible theme="light">
        <AntDPanels></AntDPanels>
      </Sider>
    </AntdContext.Provider>
  );
};

export default AsideLeft;
