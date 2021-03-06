import NavBar from './components/NavBar'
import Footer from './components/Footer.js';
import Main from './components/Main';
import { BrowserRouter } from "react-router-dom"
import CartProvider from './components/CartContext';


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Main />
        <Footer />
      </BrowserRouter>
    </CartProvider>

  )
}

export default App;
