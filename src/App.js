
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Recomm from './Recomm';
import './App.css';

function App() {
  return (
    <div className="App">
        
      <Header/>
      <div className="app_page">
        <Sidebar/>
        <Recomm/>
      </div>
      
    
    </div>


    
  );
}

export default App;
