import React from 'react';
import './App.css';
import Title from '../title/Title';

function App() {
  return (
    <div className='App'>
      <Title
        greeting={'Hi, I am'}
        name={'Manuel'}
      />
      under
    </div>
  );
}

export default App;
