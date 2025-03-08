import React, { useState } from 'react';
import { Layout } from 'antd';
import Sidebar from './Sidebar';
import TerminalComponent from './TerminalComponent';
import Settings from './Settings';

const { Content } = Layout;

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <Layout style={{ height: '100vh' }}>
      <Sidebar setTheme={setTheme} />
      <Layout>
        <Content style={{ padding: '20px', background: theme === 'dark' ? '#1e1e1e' : '#fff' }}>
          <TerminalComponent theme={theme} />
          <Settings />
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
