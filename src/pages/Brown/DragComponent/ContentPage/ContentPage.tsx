import { DeleteOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, MenuProps } from "antd"
import { Content } from "antd/es/layout/layout"
import { observable } from "mobx";
import { observer } from "mobx-react";
import React from "react"
import { useStore } from "../../Store";
import ComponentButton from "../ComponentButton/ComponentButton";
import { IBox, IContainer } from "../DragInterface";
import Draggable from "../DragUtils/Draggable";
import Droppable from "../DragUtils/Droppable";
const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  minHeight: 20,
  lineHeight: '20px',
  border: '1px solid red',
  width: '1500px'
};

const ContentPage: React.FC = observer(() => {

  const { dragItemStore } = useStore();
  let data: IContainer;
  const handleToContent = (item: any, monitor: any, state: IContainer[]) => {
    dragItemStore.handleToContent(data, item.name);
  }

  const handleToNav = (item: any) => {

    dragItemStore.handleToNav(item);
  }


  return (<Layout>
    <Content style={contentStyle}>

      <Button>save</Button>
      <h1>Received Value:{dragItemStore.type}</h1>
      {
        dragItemStore.container.map((item: IContainer) => {
          data = item;
          return <Droppable
            accept="drag-2"
            text={item.type}
            key={item.id}
            handleDrop={handleToContent}
            state={dragItemStore.container}
            style={{ textAlign: 'start', height: '200px' }}
          >
            {dragItemStore.box.map((drag: IBox) => {
              if (item.id == drag.containerId)
                return <Draggable
                  type="drag-2"
                  item={{ text: drag.type }}
                  state={dragItemStore.box}
                  style={{ border: '0px' }}
                  key={drag.id}
                >
                  <ComponentButton type={drag}></ComponentButton>
                </Draggable>
            }
            )}
          </Droppable>
        }
        )
      }
    </Content>
  </Layout>
  )
})

export default ContentPage;