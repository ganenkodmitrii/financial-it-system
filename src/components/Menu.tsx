import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu as AppMenu } from 'antd';
import type { MenuProps } from 'antd';
import { MailOutlined } from '@ant-design/icons';

export const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string>(location.pathname);

  const menuItems: MenuProps['items'] = [
    {
      key: '/',
      label: 'Intro',
      icon: <MailOutlined />,
      onClick: () => navigate('/'),
    },
    {
      key: '/farm',
      label: 'Farm',
      icon: <MailOutlined />,
      onClick: () => navigate('/farm'),
    },
    {
      key: '/salary',
      label: 'Salary',
      icon: <MailOutlined />,
      onClick: () => navigate('/salary'),
    },
    {
      key: '/credit',
      label: 'Credit',
      icon: <MailOutlined />,
      onClick: () => navigate('/credit'),
    },
  ];

  return (
    <AppMenu
      theme="dark"
      mode="horizontal"
      items={menuItems}
      selectedKeys={[activeMenu]}
      onClick={({ item, key }) => setActiveMenu(key)}
    />
  );
};
