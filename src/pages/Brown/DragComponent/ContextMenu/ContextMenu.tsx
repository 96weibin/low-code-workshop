
import { Menu, Button, MenuProps } from 'antd';
import { useState } from 'react';

function ContextMenu() {
  const [visible, setVisible] = useState(false);

  const handleMenuClick = (e:any) => {
    console.log('click', e);
    setVisible(false);
  };

  const handleContextMenu=(e:any) =>{
    e.preventDefault();
    // 在这里处理菜单的显示逻辑
    setVisible(true)
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: "a",
    },
    {
      key: '2',
      label: "ab",
    },
    {
      key: '3',
      label: "abc",
    },
  ];
  const menu = (
    <Menu onClick={handleMenuClick} items={items}></Menu>
  );

  return (
    <div>
      <Button onContextMenu={handleContextMenu} onClick={() => setVisible(false)}>
        Right-click me
      </Button>
      {visible && menu}
    </div>
  );
}

export default ContextMenu;