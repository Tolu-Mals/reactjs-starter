import React from 'react';
import duck from './img/ducks.jpeg';
import './App.css';

const App = () => (
  <div>
    <h1 className='blue'>Reactjs Starter</h1>
    <img src={duck} alt="duck" />
  </div>
);

export default App;