import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GeneralProvider } from "./Context";
import Home from "./views/Home";
import ProductDetail from "./views/ProductDetail";
import Tienda from "./views/Tienda";
import Nosotros from "./views/Nosotros"
import Cart from "./views/Cart";


function App() {
  
  return (
    <div className="App">
      <GeneralProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Nosotros" element={<Nosotros />} />
            <Route path="/Tienda" element={<Tienda />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/ShopCart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </GeneralProvider>
    </div>
  );
}

export default App;
