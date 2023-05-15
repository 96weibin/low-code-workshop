import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragOne from './DragOne';
const DragTest: React.FC = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <DragOne></DragOne>
      </DndProvider>
    </>
  );
};

export default DragTest;
