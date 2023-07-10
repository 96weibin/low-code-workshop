import {
  Button,
  Card,
  Checkbox,
  Col,
  Dropdown,
  Input,
  Layout,
  MenuProps,
  Radio,
  Rate,
  Row,
  Space,
  Switch,
} from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import Sider from 'antd/es/layout/Sider';
import React, { useEffect } from 'react';
import Draggable from '../DragComponent/Draggable';
import Droppable from '../DragComponent/Droppable';

interface state {
  top: number;
  left: number;
  id: number;
}

function Eg4() {
  const { Header, Footer, Content } = Layout;

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    paddingInline: 50,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
  };

  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
  };

  const siderStyle: React.CSSProperties = {
    textAlign: 'center',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#3ba0e9',
  };

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  };
  function ComponentButton(props: any) {
    switch (props.text) {
      case '1':
        return <Button type="primary"> Primary Button</Button>;
      case '2':
        return <Rate />;
      case '3':
        const onChange = (checked: boolean) => {
          console.log(`switch to ${checked}`);
        };
        return <Switch defaultChecked onChange={onChange} />;
      case '4':
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
                2nd menu item
              </a>
            ),
          },
          {
            key: '3',
            label: (
              <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
              </a>
            ),
          },
        ];
        return (
          <Dropdown menu={{ items }} placement="bottomLeft" arrow>
            <Button>bottomLeft</Button>
          </Dropdown>
        );
      case '5':
        return <Radio>Radio</Radio>;
      case '6':
        const onChange2 = (e: CheckboxChangeEvent) => {
          console.log(`checked = ${e.target.checked}`);
        };
        return <Checkbox onChange={onChange2}>Checkbox</Checkbox>;
      case '7':
        return (
          <Card title="Card title" bordered={false} style={{ width: 200 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        );
      case '8':
        return (
          <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
            <Layout>
              <Header style={headerStyle}>Header</Header>
              <Layout hasSider>
                <Sider style={siderStyle}>Sider</Sider>
                <Content style={contentStyle}>Content</Content>
              </Layout>
              <Footer style={footerStyle}>Footer</Footer>
            </Layout>
          </Space>
        );
      default:
        return <Input placeholder="Basic usage" />;
    }
  }

  const [box1, setBox1] = React.useState([
    { text: '1' },
    { text: '2' },
    { text: '3' },
    { text: '4' },
    { text: '5' },
    { text: '6' },
    { text: '7' },
    { text: '8' },
  ]);

  const [box2, setBox2] = React.useState([]);
  useEffect(() => {
    const localStorageData = localStorage.getItem('myData');
    if (localStorageData) {
      setBox2(JSON.parse(localStorageData));
    }
  }, []);
  const handleBox1 = (item: { text: string }, monitor?: any, state?: any[]) => {
    // if (state.find((each: { text: string }) => each.text === item.text)) return;
    // remove from box2
    setBox2((prev) => {
      const index = prev.findIndex((each: any) => each.text === item.text);
      const copy = [...prev];
      copy.splice(index, 1);
      return copy;
    });
    // add to box1
    setBox1((prev) => {
      return prev;
    });
  };

  const handleBox2 = (item: { text: string }, monitor?: any, state?: any[]) => {
    // remove from box1
    setBox1((prev) => {
      return prev;
    });
    // add to box2
    setBox2((prev): any => {
      return [...prev, { text: item.text }];
    });
  };
  // hover
  const [isHover, setHover] = React.useState(false);
  const handleMouseOver = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  // const [position, setPosition] = React.useState({ top: 50, left: 100 });
  // const handleDrop = (item: any, monitor: any, state: state) => {
  //   const { x, y } = monitor.getDifferenceFromInitialOffset();
  //   const { top, left } = { top: state.top + y, left: state.left + x };
  //   if (top > 0 && left > 0) {
  //     setPosition((prev) => ({ top, left }));
  //   }
  // };

  // const dragStyle = {
  //   position: 'relative',
  //   justifyContent: 'left',
  //   left: `${position.left}px`,
  //   top: `${position.top}px`,
  // };
  return (
    <>
      <Row className="antdWrapper">
        <Col span={4} className="antdAsideL">
          <Droppable
            accept="drag-2"
            handleDrop={handleBox1}
            text="组件"
            state={box1}
            style={{ textAlign: 'start', height: '800px' }}
          >
            {box1.map((drag) => (
              <div>
                <Draggable
                  key={drag.text.length + Math.random() * 1000 + Math.random() * 50}
                  type="drag-2"
                  item={{ text: drag.text }}
                  state={box1}
                  style={{ border: '0px' }}
                >
                  <ComponentButton text={drag.text}></ComponentButton>
                </Draggable>
              </div>
            ))}
          </Droppable>
        </Col>
        <Col span={16}>
          <Droppable
            accept="drag-2"
            handleDrop={handleBox2}
            text="页面"
            state={box2}
            style={{ textAlign: 'start', height: '800px' }}
            isSave="true"
          >
            {box2.map((drag: any) => (
              <Draggable
                key={drag.text.length + Math.random() * 1000 + Math.random() * 50}
                type="drag-2"
                item={{ text: drag.text }}
                state={box2}
                style={{ border: '0px' }}
                onMouseOver={handleMouseOver}
                onMouseLeave={handleMouseLeave}
              >
                <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
                  <ComponentButton text={drag.text}></ComponentButton>
                  {isHover && <Button onClick={() => handleBox1({ text: drag.text })}>删除</Button>}
                </div>
              </Draggable>
            ))}
          </Droppable>
        </Col>
      </Row>
    </>
  );
}

export default Eg4;
