import React from 'react';
import Draggable from '../DragComponent/Draggable';
import DragGroup from '../DragComponent/DragGroup';
import Droppable from '../DragComponent/Droppable';

function Eg2() {
  const [box1, setBox1] = React.useState([{ text: 'Hello' }, { text: 'World' }]);
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
    setBox1((prev) => {
      return prev;
    });
    // add to box2
    setBox2((prev): any => {
      return [...prev, { text: item.text }];
    });
  };

  return (
    <>
      <Droppable accept="drag-2" handleDrop={handleBox1} text="Box1" state={box1}>
        <DragGroup>
          {box1.map((drag) => (
            <Draggable
              key={drag.text.length + Math.random() * 1000 + Math.random() * 50}
              type="drag-2"
              text={drag.text}
              item={{ text: drag.text }}
              state={box1}
            />
          ))}
        </DragGroup>
      </Droppable>
      <Droppable accept="drag-2" handleDrop={handleBox2} text="Box 2" state={box2}>
        <DragGroup>
          {box2.map((drag: any) => (
            <Draggable
              key={drag.text.length + Math.random() * 1000 + Math.random() * 50}
              type="drag-2"
              text={drag.text}
              item={{ text: drag.text }}
              state={box2}
            />
          ))}
        </DragGroup>
      </Droppable>
    </>
  );
}

export default Eg2;
