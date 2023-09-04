import { useDrag } from 'react-dnd';
import styles from '../style/Draggable.css';

function Draggable({ children, type, item, text, style, hideWhenDrag, state}: any) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type,
      item,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [state],
  );

  if (isDragging && hideWhenDrag) {
    return <div ref={drag}></div>;
  }

  return (
    <span
      className={`${styles.draggable} ${isDragging && styles.dragging}`}
      style={style}
      ref={drag}
    >
      <span>{text}</span>
      {children}
    </span>
  );
}

export default Draggable;
