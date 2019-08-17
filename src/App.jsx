import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'themes/default'
import Page from 'components/Page'
import Title from 'components/Title/Title.css'
import AppContainer from './App.css'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Title>Start typing..</Title>
        <Page />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
