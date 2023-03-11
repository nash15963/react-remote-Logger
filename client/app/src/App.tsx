import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// logger
import { Logger, testLogger } from './Logger'

function App() {

  // const message ='hello world' ;

  useEffect(()=>{
    testLogger()
  },[])


  useEffect(()=>{
    const message = 'hello world'
    const localFile = 'app.tsx'
    Logger(1, message, localFile);
  },[])

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
