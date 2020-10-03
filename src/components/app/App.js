import React from 'react';
import './App.css';
import Nav from '../nav/Nav';
import Title from '../title/Title';

const navItems = [
  {label:'About', color: undefined, active:false},
  {label:'Experience', color: '#f47c7c', active:false},
  {label:'Projects', color: '#a1de93', active:false},
  {label:'Creative', color: '#70a1d7', active:false}
]

function App() {
  return (
    <div className='App'>
      <Title label={'Manuel Moquete'}/>
      <Nav items={navItems}/>
      <div className='Apps'>
        {/* Manuel Moquete  */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam metus lorem, commodo non enim in, tincidunt lobortis ex. Nullam ipsum nulla, rhoncus at nibh eu, elementum ultrices arcu. In non suscipit erat. Duis lectus lacus, ultrices id libero id, accumsan finibus ante. Morbi vel dignissim arcu, ut aliquet erat. Phasellus bibendum sodales vehicula. Fusce massa diam, interdum ac faucibus vel, rhoncus vulputate quam. Nam quis posuere augue.

      </div>
    </div>
  );
}

export default App;
