import React from 'react';
import Button from './components/Button';
import SpecialButton from './components/SpecialButton';

const App = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Button Examples with CSS Modules</h1>
      <Button label="Regular Button 1" />
      <Button label="Regular Button 2" />
      <SpecialButton label="Special Button 1" />
      <SpecialButton label="Special Button 2" />
    </div>
  );
};

export default App;
