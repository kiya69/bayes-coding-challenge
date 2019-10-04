import React from 'react';
import './App.css';
import Tournaments from './containers/Tournaments/Tournaments';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Tournaments />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
