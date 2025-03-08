import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import { FitAddon } from 'xterm-addon-fit';
import 'xterm/css/xterm.css';

const TerminalComponent: React.FC<{ theme: string }> = ({ theme }) => {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      theme:
        theme === 'dark'
          ? { background: '#1e1e1e', foreground: '#ffffff' }
          : {},
    });

    const fitAddon = new FitAddon();
    term.loadAddon(fitAddon);

    if (terminalRef.current) {
      term.open(terminalRef.current);
      fitAddon.fit();
      term.write('Welcome to Electron Terminal!\r\n');
    }

    window.electron.onSerialData((data) => {
      term.write(data);
    });

    return () => {
      term.dispose();
    };
  }, [theme]);

  return (
    <div
      ref={terminalRef}
      style={{ width: '100%', height: '300px', background: '#000' }}
    />
  );
};

export default TerminalComponent;
