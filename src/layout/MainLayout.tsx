import HeaderComponent from "../components/header-component/HeaderComponent.tsx";
import {Outlet} from "react-router";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;