import HeaderComponent from "../components/header-component/HeaderComponent.tsx";
import {Outlet} from "react-router";
import MoviesListComponent from "../components/moviesList-component/MoviesListComponent.tsx";

const MoviesPage = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <MoviesListComponent/>

        </div>
    );
};

export default MoviesPage;