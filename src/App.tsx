import React from 'react';
import './App.css';
import Main from './components/Main';
import { CountryProvider } from './contexts/CountryContext';

function App() {
  return (
    <div className="App">
      <CountryProvider>
        <Main />
      </CountryProvider>
    </div>
  );
}

export default App;
