import { DownOutlined, SearchOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Checkbox, Dropdown, Input, Layout, Menu, MenuProps, Space, Tooltip } from 'antd';
import React from 'react';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { useStore } from '../../Store';
import ComponentButton from '../ComponentButton/ComponentButton';
import Draggable from '../DragUtils/Draggable';
import Droppable from '../DragUtils/Droppable';
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
    dragItemStore.add("单列栅格")

  };

  const layoutTwo = () => {
    dragItemStore.add("上下中布局")

  };

  const layoutThree = () => {
    dragItemStore.add("侧边栏布局")

  };
  const layoutFour = () => {
    dragItemStore.add("响应式布局")

  };

  const handleToContent = (item:any) => {
     dragItemStore.handleToContent(item)
    // dragItemStore.handleToCOntent()
  }

  const handleToNav = (item: any) => {
    console.log(item);
    
    dragItemStore.handleToNav(item)
  }

  // const handleBox1 = (item: { text: string }, monitor?: any, state?: any[]) => {
  //   // if (state.find((each: { text: string }) => each.text === item.text)) return;
  //   // remove from box2
  //   setBox2((prev) => {
  //     const index = prev.findIndex((each: any) => each.text === item.text);
  //     const copy = [...prev];
  //     copy.splice(index, 1);
  //     return copy;
  //   });
  //   // add to box1
  //   setBox1((prev) => {
  //     return prev;
  //   });
  // };

  const a = 1;
  const comBtn = [{ type: 1, id: 1 },
  { type: 2, id: 2 },
  { type: 3, id: 3 },
  { type: 4, id: 4 },
  { type: 5, id: 5 },
  { type: 6, id: 6 },
  { type: 7, id: 7 },
  { type: 8, id: 8 },
  { type: 9, id: 9 },
  { type: 10, id: 10 },
  ];
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
        
          {comBtn.map((drag) => (
            <div>
              <Draggable
                type="drag-2"
                style={{ border: '0px' }}
                key={drag.id}
                state={dragItemStore.box}
                item={{ name: drag.type }}
                add = {handleToNav(drag)}
              >
                <ComponentButton type={drag.id}></ComponentButton>
              </Draggable>
            </div>
          ))}

      </div>
      <div style={blockStyle}>
        <div>
          <Droppable
            accept="drag-2"
            text="导航"
            style={{ textAlign: 'start', height: '300px' }}
          >
            <Draggable
              type="drag-2"
              style={{ border: '0px' }}
            >
              <Dropdown menu={{ items }}>
                <a onClick={(e) => e.preventDefault()}>
                  <Space>
                    Hover me
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              <Menu style={{ width: 256 }} mode="vertical" items={items} />
            </Draggable>
          </Droppable>
        </div>
      </div>
      <div style={blockStyle}>
        <div>
          <Droppable
            accept="drag-2"
            text="其他"
            style={{ textAlign: 'start', height: '200px' }}
          >
            <Draggable
              type="drag-2"
              style={{ border: '0px' }}
            >
              <Checkbox>Checkbox</Checkbox>
              <Input placeholder="Basic usage" />
            </Draggable>
          </Droppable>
        </div>
      </div>
    </Sider>

  </Layout>)
}
);

export default Nav;
