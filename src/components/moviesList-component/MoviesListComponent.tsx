import { useAppDispatch } from "../../redux/hooks/useAppDispatch.ts";
import { useEffect, useState } from "react";
import { moviesSliceActions } from "../../redux/slices/moviesSlice.ts";
import { useAppSelector } from "../../redux/hooks/useAppSelector.ts";
import { genresSliceActions } from "../../redux/slices/genresSlice.ts";
import MovieCardComponent from "../movieCard-component/MovieCardComponent.tsx";
import GenresListComponent from "../genresList-component/GenresListComponent.tsx";

import "./MoviesListComponent.css";
import PaginationComponent from "../pagination-component/PaginationComponent.tsx";
import {useSearchParams} from "react-router";

const MoviesListComponent = () => {
    const dispatch = useAppDispatch();

    const { movies } = useAppSelector(state => state.moviesSlice);
    const { genres } = useAppSelector(state => state.genresSlice);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        if (movies.length === 0) {
            dispatch(moviesSliceActions.loadMovies());
        }

        if (genres.length === 0) {
            dispatch(genresSliceActions.loadGenres());
        }
    }, []);

    //------------------------------------------------
    const [query] = useSearchParams()

    //------------------------------------------------


    return (
        <div className="container">

            <div className="content">
                <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
                    <button
                        className="toggleBtn"
                        onClick={() => setIsSidebarOpen(prev => !prev)}>
                        {isSidebarOpen ? "←" : "→"}
                    </button>

                    <h3 className="sidebarTitle">Genres</h3>

                    <div className="genresList">{genres.map((genre) => (<GenresListComponent key={genre.id} genre={genre} />))}</div>
                </div>

                <div className="moviesList">
                    {movies.map((movie) => (<MovieCardComponent movie={movie} key={movie.id} />))}
                </div>
            </div>

            {<PaginationComponent/>}

        </div>

    );
};

export default MoviesListComponent;
