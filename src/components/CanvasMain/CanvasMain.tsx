
import {useDrop} from "react-dnd";
import {ItemTypes} from "@/components/Aside/AsideLeft";


function CanvasMain() {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.Button,
    drop: () => ({ name: 'Dustbin' }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

  const isActive = canDrop && isOver;
  let backgroundColor = '#eee';
  if (isActive) {
    backgroundColor = 'darkgreen';
  }
  else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }
  return (<div ref={drop} role={'Dustbin'} style={{ width:'100%', height: '500px', backgroundColor }}>
    {isActive ? 'Release to drop' : 'Drag a box here'}
  </div>);
}

export default CanvasMain;
