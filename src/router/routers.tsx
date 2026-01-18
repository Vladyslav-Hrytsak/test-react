import {createBrowserRouter} from "react-router";
import MoviesPage from "../pages/MoviesPage.tsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.tsx";
import MainLayout from "../layout/MainLayout.tsx";


export const router = createBrowserRouter([
    {path: "/", element: <MainLayout />, children: [
            { index: true, element: <MoviesPage /> },
            { path: "movies/:id", element: <MovieDetailsPage /> }
        ]
    }
]);