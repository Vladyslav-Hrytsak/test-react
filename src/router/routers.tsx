import {createBrowserRouter} from "react-router";
import MoviesPage from "../pages/MoviesPage.tsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.tsx";


export const router = createBrowserRouter([
    {path:'/', element: <MoviesPage/>, children:[
            {path:'movies/:id', element: <MovieDetailsPage/>}
        ]}
]);