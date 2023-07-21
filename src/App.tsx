import { useState, createContext } from 'react';
import { ThemeProvider } from 'styled-components'
import './App.css';
import { GlobalStyle, themes } from './style';
import { HomePage } from './components/templates';

export const ThemeContext = createContext({});

function App() {
  const themeSelected = localStorage.getItem('theme') || 'dark';
  const [theme, setTheme] = useState<string>(themeSelected);

  const handleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme);
  }

  return (
    <ThemeContext.Provider value={{theme, handleTheme}}>
      {/* @ts-ignore */}
      <ThemeProvider theme={themes[theme]}>
        <GlobalStyle/>
        <HomePage/>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App