import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, *:is(:before, :after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Open Sans', sans-serif;
    width: 100%;
    min-height: 100vh;
    background-color: ${ p => p.theme.dominant};
    font-size: 16px;
  }
`

export const themes = {
  light: {
    dominant: '#FCF8EC',
    secondary: '#D0E8F2',
    accent: '#79A3B1',
    text: '#456268',
    title: '#3A4F51',
    subtitle: '#2A393A'
  }, 
  dark: {
    dominant: '#393646',
    secondary: '#4F4557',
    accent: '#6D5D6E',
    text: '#F4EEE0',
    title: '#A89AAD',
    subtitle: '#C9C4BD'
  }
}

/* 

dominant
secondary
accent
text

*/