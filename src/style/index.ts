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
    background-color: ${ p => p.theme.bg};
  }
`

export const themes = {
  light: {
    bg: '#ffffff',
    text: '#21242B',
    main: '#25316B',
    complementary: '#57E2F7',
  }, 
  dark: {
    bg: '#3C4D9B',
    text: '#ffffff',
    main: '#25316B',
    complementary: '#57E2F7',
  }
}