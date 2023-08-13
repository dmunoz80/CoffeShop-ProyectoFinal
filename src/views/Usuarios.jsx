import UsersCard from "../components/UsersCard";
import Navbar from "../components/Navbar";
import FooterNavigation from "../components/FooterNavigation";

const Usuarios = () => {
    return (
        <>
            <Navbar title={"USUARIOS"}/>
            <UsersCard />
            <FooterNavigation />
        </>
    )
}

export default Usuarios;