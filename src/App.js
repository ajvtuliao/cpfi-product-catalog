import React from 'react';
import Header from './Header.js'
import Body from './Body.js'
import './App.css';

let App = () => {
  return (
    <div className="App" 
    style={{
      backgroundColor: '#E6F1F1',
    }}
    >
      <Header/>
      <Body/>
    </div>
  )
}
export default App;
