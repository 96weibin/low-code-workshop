import type { CSSProperties, FC } from 'react';
import { useDrag } from 'react-dnd';

import { ItemTypes } from './ItemTypes';

const style: CSSProperties = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left',
};

export interface BoxProps {
  name: string;
}

interface DropResult {
  name: string;
}

export const Box: FC<BoxProps> = function Box({ name }) {
  // drag是拖拽的是什么东西ref dom结点
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX, // 类型
    item: { name }, // 属性，拖拽时用到的属性
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<DropResult>();
      if (item && dropResult) {
        alert(`You dropped ${item.name} into ${dropResult.name}!`);
      }
    },
    // 收集一些状态，监视当前的状态
    collect: (monitor) => ({
      isDragging: monitor.isDragging(), // 有没有拖拽
      // handlerId: monitor.getHandlerId(),
    }),
  }));
  if (isDragging) {
    // 正在拉的时候让框消失
    return <div ref={drag}></div>;
  }

  const opacity = isDragging ? 0.4 : 1;
  return (
    <div ref={drag} style={{ ...style, opacity }} data-testid={`box`}>
      {name}
    </div>
  );
};
