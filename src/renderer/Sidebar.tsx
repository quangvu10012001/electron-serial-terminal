import React from 'react';
import { Layout, Menu, Switch } from 'antd';
import { SettingOutlined, CodeOutlined } from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar: React.FC<{ setTheme: (theme: 'dark' | 'light') => void }> = ({
  setTheme,
}) => {
  return (
    <Sider width={80} theme="dark">
      <Menu mode="vertical" theme="dark" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<CodeOutlined />}>
          {' '}
          Terminal{' '}
        </Menu.Item>
        <Menu.Item key="2" icon={<SettingOutlined />}>
          {' '}
          Settings{' '}
        </Menu.Item>
        <Menu.Item key="3">
          <Switch
            checkedChildren="Dark"
            unCheckedChildren="Light"
            defaultChecked
            onChange={(checked) => setTheme(checked ? 'dark' : 'light')}
          />
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
