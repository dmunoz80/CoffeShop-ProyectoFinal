import React, { createContext, useEffect, useState } from "react";

const Context = createContext();


const GeneralProvider = ({ children }) => {
    const [usuario, setUsuario] = useState(null)
    const [products, setProducts] = useState([]);
    const [ShopCart, setShopCart] = useState([]);
    const [total, setTotal] = useState(0)
    const [buscar, setBuscar] = useState ('')

    const dispatchUsuario = (usuario) => {
        setUsuario(usuario)
    }

    const dataProduct = async () => {
        const res = await fetch('/product.json');
        const data = await res.json();
        const newData = data.map((e) => ({
            desc: e.desc,
            id: e.id,
            img: e.img,
            ingredients: e.ingredients,
            name: e.name,
            price: e.price,
            quantity: 1
        }))
        setProducts(newData);
    }

    useEffect(() => {
        dataProduct()
    }, []);

    //Agregar Productos al carro de compras en Tienda
    const addToCart = (selectedProduct) => {
        const index = ShopCart.findIndex(e => e.id === selectedProduct.id);
        if (index !== -1) {
            const updatedProducts = [...ShopCart];
            updatedProducts[index].quantity += 1;
            setShopCart(updatedProducts);
        } else {
            setShopCart(products => [...products, { ...selectedProduct, quantity: 1 }]);
        }
        setTotal((e) => e + selectedProduct.price)
    }

    const handleClick = (selectedProduct) => {
        addToCart(selectedProduct)
    }

    //Suma o resta de Items al carro de compras
    const AddItem = (id) => {
        const productUp = ShopCart.map((product) => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity += 1 }
            } else {
                return product;
            }
        })
        setShopCart(productUp);
        priceTotal();
    }

    const SubtractItem = (id) => {
        const productDown = ShopCart.map((product) => {
            if (product.id === id) {
                return { ...product, quantity: product.quantity -= 1 }
            } else {
                return product
            }
        })
        setShopCart(productDown.filter((product) => product.quantity > 0));
        priceTotal();
    }

    //suma o resta precios al carrito
    const priceTotal = () => {
        const totalPrice = ShopCart.reduce((acc, product) => acc + product.price * product.quantity, 0);
        setTotal(totalPrice);
    }

    //Función para realizar el filtrado o busqueda de productos

    const busqueda = (e) => {
        e.preventDefault()
        setBuscar(e.target.value)
    }
    let resultadoBusqueda = []
    if(!buscar) {
        resultadoBusqueda = products
    } else{
        resultadoBusqueda = products.filter((e) =>
        e.name.toLowerCase().includes(buscar.toLocaleLowerCase()) )
    }
 
    return (
        <Context.Provider value={
            {
                usuario,
                dispatchUsuario,
                products,
                setProducts,
                handleClick,
                ShopCart,
                setShopCart,
                AddItem,
                SubtractItem,
                priceTotal,
                total,
                busqueda,
                resultadoBusqueda,
                buscar
            }}>
            {children}
        </Context.Provider>
    )
}

export { GeneralProvider }
export default Context;