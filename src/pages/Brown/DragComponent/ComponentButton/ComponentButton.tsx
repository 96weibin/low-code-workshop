import { SearchOutlined } from "@ant-design/icons";
import { Button, Tooltip } from "antd";
import { observer } from "mobx-react";
import React from "react";
import { useStore } from "../../Store";

interface IComType{
  type:number
}
const ComponentButton = (props:IComType) => {

  switch (props.type) {
    case 1:
      return <Button type="primary"> Primary Button</Button>;
    case 2:
      <Button>Default Button</Button>;
    case 3:

      return <Button type="dashed">Dashed Button</Button>;
    case 4:
      return <Button type="text">Text Button</Button>;
    case 5:
      return <Button type="link">Link Button</Button>;
    case 6:
      return <Tooltip title="search">
        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
      </Tooltip>;
    case 7:
      return <Button type="primary" shape="circle">
        A
      </Button>;
    case 8:
      return <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>;
    case 9:
      return <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} />
      </Tooltip>;
    case 10:
      return <Button icon={<SearchOutlined />}>Search</Button>;
    default:
      return <div></div>;
  }
}
;

export default ComponentButton;