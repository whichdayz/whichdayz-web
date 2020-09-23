import React from 'react';
import { Routes } from './routes';
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { Navbar } from './components';
import './App.css'
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App" >
      <ThemeProvider>
        <AuthProvider>
          <header>
            <Navbar/>
          </header>
            <Routes/>
            <Footer/>
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
