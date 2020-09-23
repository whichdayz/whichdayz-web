import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  // eslint-disable-next-line
  const [light, setLight] = useState({
    syntax: '#555',
    ui: '#ddd',
    bg: '#eee',
  });
  // eslint-disable-next-line
  const [dark, setDark] = useState({
    syntax: '#ddd',
    ui: '#333',
    bg: '#555',
  });
  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };
  return (
    <ThemeContext.Provider
      value={{
        isLightTheme,
        light,
        dark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// class ThemeContextProvider extends Component {
//     state = {
//         isLightTheme: true,
//         light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
//         dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
//     }
//     toggleTheme = () => {
//         this.setState({ isLightTheme: !this.state.isLightTheme });
//     }
//     render() {
//         return (
//             <ThemeContext.Provider value={{...this.state, toogleTheme: this.toogleTheme}}>
//                 {this.props.children}
//             </ThemeContext.Provider>
//         );
//     }
// }

// export default ThemeContextProvider