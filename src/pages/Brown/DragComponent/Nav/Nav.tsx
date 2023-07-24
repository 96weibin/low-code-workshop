import { DownOutlined, SearchOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Checkbox, Dropdown, Input, Layout, Menu, MenuProps, Space, Tooltip } from 'antd';
import React from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { useStore } from '../../Store';
import ComponentButton from '../ComponentButton/ComponentButton';
const { Header, Footer, Sider, Content } = Layout;

const siderStyle: React.CSSProperties = {
  textAlign: 'center',
  lineHeight: '20px',
  border: '1px solid red',
  background: 'transparent',
  margin: '0 20px 0 0',
};

const blockStyle: React.CSSProperties = {
  marginBottom: '20px',
};
const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

// function exportDataToFile() {
//   const data = {
//     name: 'John',
//     age: 30,
//     city: 'New York',
//   };

//   const jsonData = JSON.stringify(data);

//   fs.writeFile('data.json', jsonData, (err) => {
//     if (err) throw err;
//     console.log('Data written to file');
//   });
// }




const Nav: React.FC = observer(() => {

  const { dragItemStore } = useStore();
  
  const layoutOne = () => {
   dragItemStore.add()

  };
  
  const layoutTwo = () => {
    dragItemStore.add()

  };
  
  const layoutThree = () => {
    dragItemStore.add()

  };
  const layoutFour = () => {
    dragItemStore.add()

  };

  const a =1
  return (<Layout>
    <Sider style={siderStyle} width="300px">
      <div style={blockStyle}>
        <span>布局</span>
        <div>
          <Button onClick={layoutOne}>单列栅格</Button>
          <Button onClick={layoutTwo}>上下中布局</Button>
          <Button onClick={layoutThree}>侧边布局</Button>
          <Button onClick={layoutFour}>响应式布局</Button>
        </div>
      </div>
      <div>
        <span>按钮</span>
        <div>
          <Space wrap>
            <ComponentButton type={a}></ComponentButton>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
          </Space>
          <Space direction="vertical">
            <Space wrap>
              <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button type="primary" shape="circle">
                A
              </Button>
              <Button type="primary" icon={<SearchOutlined />}>
                Search
              </Button>
              <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button icon={<SearchOutlined />}>Search</Button>
            </Space>
            <Space wrap>
              <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button icon={<SearchOutlined />}>Search</Button>
              <Tooltip title="search">
                <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button type="dashed" icon={<SearchOutlined />}>
                Search
              </Button>
              <Button icon={<SearchOutlined />} href="https://www.google.com" />
            </Space>
          </Space>
        </div>
      </div>
      <div style={blockStyle}>
        <span>导航</span>
        <div>
          {/* <Breadcrumb items={[{ title: 'sample' }]} /> */}
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                Hover me
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          <Menu style={{ width: 256 }} mode="vertical" items={items} />
        </div>
      </div>
      <div style={blockStyle}>
        <span>其他</span>
        <div>
          <Checkbox>Checkbox</Checkbox>
          <Input placeholder="Basic usage" />
        </div>
      </div>
    </Sider>

  </Layout>)
}
);

export default Nav;
