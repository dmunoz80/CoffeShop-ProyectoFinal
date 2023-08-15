import FooterNavigation from "../components/FooterNavigation";
import Navbar from "../components/Navbar";
import ProductsCards from "../components/productCards"

const Tienda = () => {
    return (
        <>
            <Navbar title={"TIENDA"} withSearch withCart />
            <ProductsCards />
            <FooterNavigation />
        </>
    )
}

export default Tienda;