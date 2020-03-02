import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Sprite from "./sprites/components/Sprite"
import sprites from "./sprites/sprites.json"

function App() {
 
  return (
    <div>
      <Sprite 
        props={sprites.main}
      />
    </div>
  );
}

export default App;
