import React from 'react';
import { Box } from './Box';
import { Dustbin } from './Dustbin';
const DragOne: React.FC = () => {
  return (
    <div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Dustbin />
      </div>
      <div style={{ overflow: 'hidden', clear: 'both' }}>
        <Box name="Glass" />
        <Box name="Banana" />
        <Box name="Paper" />
      </div>
    </div>
  );
};
export default DragOne;
