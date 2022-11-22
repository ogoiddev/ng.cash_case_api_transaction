import { AppContainer } from './AppStyle';
import Footer from './components/Footer';
import { RoutesApp } from './routes';
import GlobalStyle from './styles/global'


function App() {
  return (
    <AppContainer>
      <GlobalStyle/>
      <RoutesApp />
      <Footer/>
    </AppContainer>
  )
}

export default App
