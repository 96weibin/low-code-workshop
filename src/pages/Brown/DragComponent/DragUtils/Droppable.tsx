import { Button } from 'antd';
import { useDrop } from 'react-dnd';
import { useStore } from '../../Store';
import styles from '../style/Droppable.css';
function Droppable({ accept, handleDrop, text, children, state, big, style}: any) {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept,
      drop: (item, monitor) => {
        handleDrop(item, monitor, state)        
      },
      collect: (monitor) => ({
        isOver: !!monitor.isOver({ shallow: true }),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [state], // 为了状态实时更新
  );

  const isActive = isOver && canDrop;

  return (
    <div
      className={`${styles.droppable} ${isActive && styles.over} ${
        !isActive && canDrop && styles.can
      } ${styles.one}`}
      style={style}
      ref={drop}
    >
      <div>
        {text}      
      </div>
      {children}
    </div>
  );
}

export default Droppable;
