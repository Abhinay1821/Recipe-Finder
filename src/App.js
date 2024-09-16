import React from 'react'
import './App.css';
import { APIProvider } from './Components/APIProvider'
import Recepie from './Recepie';

function App() {
  return (
    <div className="App">
      <h1>Recepie Finder</h1>
      <APIProvider>
        <Recepie/>
      </APIProvider>
    </div>
  );
}

export default App;
