import ProductCard from "../components/ProductCard";
import FooterNavigation from "../components/FooterNavigation";
import Navbar from "../components/Navbar";

const Tienda = () => {
    return (
        <>
            <Navbar title={"Tienda"} withSearch withCart />
            <ProductCard />
            <FooterNavigation />
        </>
    )
}

export default Tienda;