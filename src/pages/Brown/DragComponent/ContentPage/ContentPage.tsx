import { Button, Layout } from "antd"
import { Content } from "antd/es/layout/layout"
import { observable } from "mobx";
import { observer } from "mobx-react";
import React from "react"
import { useStore } from "../../Store";
import Draggable from "../Draggable";
import Droppable from "../Droppable";
const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 20,
  lineHeight: '20px',
  border: '1px solid red',
  width: '1500px'
};

const ContentPage: React.FC = observer(() => {

  const { dragItemStore} = useStore();

  return (<Layout>
    <Content style={contentStyle}>

      <Button>save</Button>
      <h1>Received Value:{dragItemStore.count}</h1>
      <button onClick={dragItemStore.add}>111</button>
      {/* <button onClick={() => exportDataToFile()}>Export Data</button> */}

    </Content>
  </Layout>
  )
})

export default ContentPage;