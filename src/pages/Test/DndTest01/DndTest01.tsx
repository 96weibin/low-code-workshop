import { DndProvider, useDrag } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"


const Squares: React.FC = ()=> {
    let items =  [1,2,3,4].map((x)=>{
        const [{isDragging}, drag] = useDrag(()=>({
            type: 'ItemTypes.KNIGHT',
            collect: monitor => ({
                isDragging: !!monitor.isDragging(),
            }),

        }));
        return (<div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, width: '100px', height: '100px', background: 'pink'}}>{x}</div>)
    })
  return (<>{items}</>)
}
const DndTset01 = ()=>{
    return (
    <DndProvider backend={HTML5Backend}>
      <div
      style={{
        width: '100%',
        height: '800px',
        display: 'flex',
        flexWrap: 'wrap',
        overflow: "hidden",
        border: '1px solid black'
      }}>
        <Squares></Squares>
    </div>
    </DndProvider>
    )
}


export default DndTset01
