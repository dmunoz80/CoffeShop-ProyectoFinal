import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import ProductDetail from "../views/ProductDetail";
import Tienda from "../views/Tienda";
import Nosotros from "../views/Nosotros"
import Cart from "../views/Cart";
import Login from "../views/Login";
import Registre from "../views/Registre";
import Comment from "../views/Comment"
import Contacto from "../views/Contacto"
import Profile from "../components/Profile";
import Reviews  from "../views/Reviews";
import AddProduct  from "../views/AddProduct";
import MiPerfil  from "../views/MiPerfil";
import MisComentarios  from "../views/MisComentarios";
import { useContext, useEffect } from "react";
import Context from "../Context";

const RouteContainer = () => {
    const {dispatchUsuario} = useContext(Context)

    useEffect(() => {
        const usuario = sessionStorage.getItem("usuario")
        if(usuario) {
            dispatchUsuario(JSON.parse(usuario))
        }else{
            dispatchUsuario(null)
        }
        
    }, [])
    
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Nosotros" element={<Nosotros />} />
          <Route path="/Tienda" element={<Tienda />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/ShopCart" element={<Cart />} />
          <Route path="/Contacto" element={<Contacto />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Registre" element={<Registre />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/Reviews" element={<Reviews />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="/MiPerfil" element={<MiPerfil />} />
          <Route path="/MisComentarios/:id" element={<MisComentarios />} />
        </Routes>
      </BrowserRouter>
    )
}




export default RouteContainer