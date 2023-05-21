import React from 'react';
import './App.css';
import Main from './components/Main';
import { CountryProvider } from './contexts/CountryContext';
import { Routes, Route } from "react-router-dom";
import CountryDetailsPage from './components/CountryDetailsPage';
import Nav from './components/Nav';
import { ThemeProvider } from './contexts/ThemeContext';



function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <CountryProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="country/:id" element={<CountryDetailsPage />} />
          </Routes>
        </CountryProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
