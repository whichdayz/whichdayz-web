import React from 'react';
import { Routes } from './routes';
import {AuthProvider} from './contexts/AuthContext'
import ThemeContextProvider from './contexts/ThemeContext'
import { Navbar } from './components';
import './App.css'


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthProvider>
          <header>
            <Navbar/>
            {/* Navbar */}
          </header>
          <main>
            <Routes/>
          </main>
          <footer>
            {/* Footer */}
          </footer>
        </AuthProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
