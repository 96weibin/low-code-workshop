import {Collapse, Layout} from "antd";
import React from "react";
import {property} from "lodash";
const { Header, Footer, Sider, Content } = Layout;
const { Panel } = Collapse;

const sideStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'fixed',
  right: 0,
  top: '55px',
  bottom: 0,
};


const AsideRight: React.FC = ()=>{

  return(<>
    <Sider style={sideStyle} collapsible theme="light">
      <Collapse
        defaultActiveKey={['0', '1', '2']}
        onChange={()=>{console.log('xxxxx')}}
        size="small"
        bordered={false}
      >
        <Panel key={1} header={"property"}>
          Properties
        </Panel>
      </Collapse>
    </Sider>
  </>)
}





export default AsideRight;

