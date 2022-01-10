import NavBar from './components/NavBar'
import Footer from './components/Footer.js';
import Main from './components/Main';
import { BrowserRouter } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main />
      <Footer />
    </BrowserRouter>

  )
}

export default App;
