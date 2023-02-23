import React, { useState } from 'react';

function App() {
  const [output, setOutput] = useState('');

  const handleClick = () => {
    setOutput('This is my basic app');
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <p>{output}</p>
    </div>
  );
}

export default App;