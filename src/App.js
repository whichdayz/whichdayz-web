import React from 'react';
import { Routes } from './routes';
import AuthContextProvider from './contexts/AuthContext'
import ThemeContextProvider from './contexts/ThemeContext'
import { Navbar } from './components';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <header>
            <Navbar/>
            {/* Navbar */}
          </header>
          <main style={{marginTop: '5.5em'}}>
            <Routes/>
          </main>
          <footer>
            {/* Footer */}
          </footer>
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
