import { AppContainer } from './AppStyle';
import { RoutesApp } from './routes';
import GlobalStyle from './styles/global'


function App() {
  return (
    <AppContainer>
      <GlobalStyle/>
      <RoutesApp />
    </AppContainer>
  )
}

export default App
