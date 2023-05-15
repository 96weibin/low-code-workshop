import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Box from './Box';
import Eg1 from './Eg1';
import Eg2 from './Eg2';
import Eg3 from './Eg3';
// import { DragTwo } from './DragTwo';
const DragTest: React.FC = () => {
  // const [] = useDrop(() => {});
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Box title="1">
          <Eg1 />
        </Box>
        <Box title="2">
          <Eg2 />
        </Box>
        <Box title="3">
          <Eg3 />
        </Box>
      </DndProvider>
    </>
  );
};

export default DragTest;
