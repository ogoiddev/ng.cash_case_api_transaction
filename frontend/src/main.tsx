import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../src/styles/global'
import App from './App'
import { UserContextProvider } from './Context/UserContext'
import './index.css'
import light from './styles/theme/light'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <BrowserRouter>
        <UserContextProvider>

          <GlobalStyle/>
          <App />

        </UserContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
