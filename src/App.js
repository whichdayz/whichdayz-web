import React from 'react';
import { Routes } from './routes';
import { AuthProvider } from './contexts/AuthContext'
import { ThemeProvider } from './contexts/ThemeContext'
import { Navbar } from './components';
import './App.css'

function App() {
  return (
    <div className="App">
      <ThemeProvider>
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
      </ThemeProvider>
    </div>
  );
}

export default App;
