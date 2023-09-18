import { DeleteOutlined, DownOutlined, SearchOutlined, SmileOutlined } from "@ant-design/icons";
import { Button, Checkbox, Dropdown, Input, Menu, MenuProps, Space, Tooltip } from "antd";
import { IconType } from "antd/es/notification/interface";
import { observer } from "mobx-react";
import React, { useState } from "react";
import { useStore } from "../../Store";
import { IBox } from "../DragInterface";

interface IComType {
  type: string,
}
const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer">
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer">
        3rd menu item (disabled)
      </a>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];

const ComponentButton = (props: any) => {
  
  
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e: any,item:any) => {
    console.log('click', e); 
    if (e.key == '1') {
      setVisible(false);
      deleteBtn(item.type.id);
    }
  };
  
  const handleContextMenu = (e: any,item:any) => {
    e.preventDefault();
    // 在这里处理菜单的显示逻辑
    setVisible(true);
  }
  
  const contextMenuitems: MenuProps['items'] = [
    {
      key: '1',
      label: "删除",
      icon: <DeleteOutlined />
    },
  ];
  const menu = (
    <Menu onClick={(e)=>handleMenuClick(e,props)} items={contextMenuitems}></Menu>
  );
  const { dragItemStore } = useStore();
  const deleteBtn = (item:string) => {
    dragItemStore.deleteBox(item);
  }
  let item: string;
  if (typeof props.type == "string") {
    item = props.type;
  } else {
    item = props.type.btnType;
  }
  switch (item) {
    case "1":
      return <div><Button type="primary" onContextMenu={(e: any)=>handleContextMenu(e,props)} onClick={() => setVisible(false)}> Primary Button</Button> {visible && menu}</div>;
    case "2":
      return <div>
        <Button type="dashed" disabled onContextMenu={(e: any)=>handleContextMenu(e,props)} onClick={() => setVisible(false)}>
          Dashed(disabled)
        </Button>
        {visible && menu}
      </div>;
    case "3":
      return <div>
        <Button type="dashed" onContextMenu={(e)=>handleContextMenu(e,props)} onClick={() => setVisible(false)}>Dashed Button</Button>
        {visible && menu}
      </div>
        ;
    case "4":
      return <div>
        <Button type="text" onContextMenu={(e)=>handleContextMenu(e,props)} onClick={() => setVisible(false)}>Text Button</Button>
        {visible && menu}
      </div>;
    case "5":
      return <div>
        <Button type="link" onContextMenu={(e)=>handleContextMenu(e,props)} onClick={() => setVisible(false)}>Link Button</Button>
        {visible && menu}
      </div>;
    case "6":
      return <div>
        <Tooltip title="search">
          <Button type="primary" shape="circle" icon={<SearchOutlined />} onContextMenu={(e)=>handleContextMenu(e,props)} onClick={() => setVisible(false)}/>
        </Tooltip>
        {visible && menu}
      </div>;
    case "7":
      return <div>
        <Button type="primary" shape="circle" onContextMenu={(e)=>handleContextMenu(e,props)} onClick={() => setVisible(false)}>
          A
        </Button>
        {visible && menu}
      </div>;
    case "8":
      return <div>
        <Button type="primary" icon={<SearchOutlined />} onContextMenu={(e)=>handleContextMenu(e,props)} onClick={() => setVisible(false)}>
          Search
        </Button>
        {visible && menu}
      </div>;
    case "9":
      return <div>
        <Tooltip title="search">
          <Button shape="circle" icon={<SearchOutlined />} onContextMenu={(e)=>handleContextMenu(e,props)} onClick={() => setVisible(false)}/>
        </Tooltip>
        {visible && menu}
      </div>;
    case "10":
      return <div>
        <Button icon={<SearchOutlined />} onContextMenu={(e)=>handleContextMenu(e,props)} onClick={() => setVisible(false)}>Search</Button>
        {visible && menu}
      </div>;
    case "11":
      return <div onContextMenu={(e)=>handleContextMenu(e,props)} onClick={() => setVisible(false)}>
        <Dropdown menu={{ items }} >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              Hover me
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
        {visible && menu}
      </div>;
    case "12":
      return <div>
        <Menu style={{ width: 256 }} mode="vertical" items={items} onContextMenu={(e)=>handleContextMenu(e,props)} onClick={() => setVisible(false)}/>
        {visible && menu}
      </div>;
    case "13":
      return <div onContextMenu={(e)=>handleContextMenu(e,props)} onClick={() => setVisible(false)}>
        <Checkbox>Checkbox</Checkbox>
        {visible && menu}
      </div>;
    case "14":
      return <div>
        <Input placeholder="Basic usage" onContextMenu={(e)=>handleContextMenu(e,props)} onClick={() => setVisible(false)}/>
        {visible && menu}
      </div>;
    default:
      return <div></div>;
  }
}
  ;

export default ComponentButton;