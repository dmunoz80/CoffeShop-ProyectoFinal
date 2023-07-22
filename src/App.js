import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GeneralProvider } from "./Context";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Tienda from "./pages/Tienda";
import Nosotros from "./pages/Nosotros"
import Cart from "./pages/Cart";
import Contacto from "./pages/Contacto";


function App() {
  
  return (
    <div className="App">
      <GeneralProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Tienda" element={<Tienda />} />
            <Route path="/pizza/:id" element={<ProductDetail />} />
            <Route path="/ShopCart" element={<Cart />} />
            <Route path="/Contacto" element={<Contacto />} />
            
          </Routes>
        </BrowserRouter>
      </GeneralProvider>
    </div>
  );
}

export default App;
