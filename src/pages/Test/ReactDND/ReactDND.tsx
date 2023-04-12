
import { DndProvider, useDrag } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import React from "react";


export const ItemTypes = {
  KNIGHT: 'knight'
}


const Knight: React.FC = ()=>{
  const [{isDragging}, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))
  return (<div
    ref={drag}
    style={{
      opacity: isDragging ? 0.5 : 1,
      fontSize: 25,
      fontWeight: 'bold',
      cursor: 'move',
    }}>♘</div>)
}



const Square: React.FC<{isBlack: boolean, children: JSX.Element}> = ({isBlack, children})=>{
  const fill = isBlack ? 'black': 'white';
  const stroke = isBlack ? 'white' : 'black'
  return (<div style={{background: fill, color: stroke, width: '100%', height: '100%'}}>
    {children}
  </div>);
}

const renderSquare: React.FC<{i: number, knightPosition:[number, number]}> = ({i, knightPosition})=>{
  const x = i % 8
  const y = Math.floor(i / 8)
  const isKnightHere = x === knightPosition[0] && y === knightPosition[1]
  const black = (x + y) % 2 === 1
  const piece = isKnightHere ? <Knight /> : <div />

  return (
    <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
      <Square isBlack={black}>{piece}</Square>
    </div>
  )
}

const Board: React.FC<{knightPosition:[number, number]}> = ({knightPosition})=>{

  const squares = []
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare({i, knightPosition}))
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div
      style={{
        width: '100%',
        height: '800px',
        display: 'flex',
        flexWrap: 'wrap',
        overflow: "hidden"
      }}>
      {squares}
    </div>
    </DndProvider>
    
  )
}


function ReactDndTest() {
  return (
    <Board knightPosition={[3, 3]} />
  )
}

export default ReactDndTest;
