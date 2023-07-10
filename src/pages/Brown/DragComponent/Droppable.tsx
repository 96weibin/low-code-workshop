import { Button } from 'antd';
import { useDrop } from 'react-dnd';
import styles from './style/Droppable.css';
function Droppable({ accept, handleDrop, text, children, state, big, style, isSave }: any) {
  const [{ isOver, canDrop }, drop] = useDrop(
    () => ({
      accept,
      drop: (item, monitor) => handleDrop(item, monitor, state),
      collect: (monitor) => ({
        isOver: !!monitor.isOver({ shallow: true }),
        canDrop: !!monitor.canDrop(),
      }),
    }),
    [state], // 为了状态实时更新
  );

  const isActive = isOver && canDrop;
  // 保存
  const save = (state: any) => {
    const jsonData = JSON.stringify(state);

    localStorage.setItem('myData', jsonData);
  };
  return (
    <div
      className={`${styles.droppable} ${isActive && styles.over} ${
        !isActive && canDrop && styles.can
      } ${big && styles.big}`}
      style={style}
      ref={drop}
    >
      <div>
        {text}
        {isSave ? (
          <Button type="primary" onClick={() => save(state)}>
            save page
          </Button>
        ) : (
          ''
        )}
      </div>

      {children}
    </div>
  );
}

export default Droppable;
