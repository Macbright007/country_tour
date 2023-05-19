import React from 'react';
import './App.css';
import Main from './components/Main';
import { CountryProvider } from './contexts/CountryContext';
import { Routes, Route } from "react-router-dom";
import CountryDetailsPage from './components/CountryDetailsPage';


function App() {
  return (
    <div className="App">
      <CountryProvider>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="country/:id" element={<CountryDetailsPage />} />
        </Routes>
      </CountryProvider>
    </div>
  );
}

export default App;
