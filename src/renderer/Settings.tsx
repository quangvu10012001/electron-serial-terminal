import React, { useEffect, useState } from 'react';
import { Button, Select } from 'antd';

const Settings: React.FC = () => {
  const [ports, setPorts] = useState<{ path: string }[]>([]);
  const [selectedPort, setSelectedPort] = useState<string | null>(null);
  const [baudRate, setBaudRate] = useState<number>(9600);

  useEffect(() => {
    window.electron.listPorts().then(setPorts);
  }, []);

  const handleConnect = () => {
    if (selectedPort) {
      window.electron.openPort(selectedPort, baudRate);
    }
  };

  return (
    <div>
      <h2>Serial Port Settings</h2>
      <Select
        onChange={(val) => setSelectedPort(val)}
        placeholder="Select Port"
      >
        {ports.map((port) => (
          <Select.Option key={port.path} value={port.path}>
            {port.path}
          </Select.Option>
        ))}
      </Select>
      <Select onChange={(val) => setBaudRate(Number(val))} defaultValue="9600">
        {[9600, 115200, 250000].map((rate) => (
          <Select.Option key={rate} value={rate}>
            {rate} Baud
          </Select.Option>
        ))}
      </Select>
      <Button type="primary" onClick={handleConnect}>
        {' '}
        Connect{' '}
      </Button>
    </div>
  );
};

export default Settings;
