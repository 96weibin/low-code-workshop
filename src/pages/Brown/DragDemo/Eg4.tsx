import {
  Button,
  Card,
  Checkbox,
  Col,
  Dropdown,
  Input,
  MenuProps,
  Radio,
  Rate,
  Row,
  Switch,
} from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import React from 'react';
import Draggable from '../DragTwo/Draggable';
import Droppable from '../DragTwo/Droppable';

interface state {
  top: number;
  left: number;
  id: number;
}

function Eg4() {
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
  ]);
  const [box2, setBox2] = React.useState([]);

  const handleBox1 = (item: { text: string }, monitor: any, state: any[]) => {
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

  const handleBox2 = (item: { text: string }, monitor: any, state: any[]) => {
    // remove from box1
    setBox1((prev) => {
      return prev;
    });
    // add to box2
    setBox2((prev): any => {
      return [...prev, { text: item.text }];
    });
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
  //   border: '0px',
  // };
  return (
    <>
      <Row className="antdWrapper">
        <Col span={4} className="antdAsideL">
          <Droppable
            accept="drag-2"
            handleDrop={handleBox1}
            text="Box1"
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

          {/* <Draggable
            type="drag-3"
            text=""
            style={dragStyle}
            hideWhenDrag={true}
            item={{ top: position.top, left: position.left }}
            state={position}
          >
            <Button type="primary">Primary Button</Button>
          </Draggable> */}
        </Col>
        <Col span={16}>
          {/* <Droppable
            accept="drag-3"
            handleDrop={handleDrop}
            big={true}
            style={{ textAlign: 'start', height: '200px' }}
            state={position}
          ></Droppable> */}
          <Droppable
            accept="drag-2"
            handleDrop={handleBox2}
            text="Box 2"
            state={box2}
            style={{ textAlign: 'start', height: '800px' }}
          >
            {box2.map((drag: any) => (
              <Draggable
                key={drag.text.length + Math.random() * 1000 + Math.random() * 50}
                type="drag-2"
                item={{ text: drag.text }}
                state={box2}
                style={{ border: '0px' }}
              >
                <ComponentButton text={drag.text}></ComponentButton>
              </Draggable>
            ))}
          </Droppable>
        </Col>
      </Row>
    </>
  );
}

export default Eg4;
