import { useAppDispatch } from "../../redux/hooks/useAppDispatch";
import { useEffect, useState } from "react";
import { moviesSliceActions } from "../../redux/slices/movies-slice/moviesSlice.ts";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { genresSliceActions } from "../../redux/slices/genresSlice";
import { useSearchParams } from "react-router-dom";
import PaginationComponent from "../pagination-component/PaginationComponent";
import "./MoviesListComponent.css";
import MoviesLayoutComponent from "./moviesList-additional-components/MoviesLayoutComponent";



const MoviesListComponent = () => {
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams({ page: "1" });

    const page = Number(query.get("page") || 1);
    const genreId = query.get("genreId");

    const { movies, searchResults } = useAppSelector(state => state.moviesSlice);
    const { genres } = useAppSelector(state => state.genresSlice);

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        if (!searchResults.length) {
            if (genreId) {
                dispatch(moviesSliceActions.loadMoviesByGenre({ page, genreId: Number(genreId) }));
            } else {
                dispatch(moviesSliceActions.loadMovies(page));
            }
        }
    }, [page, genreId, searchResults.length]);

    useEffect(() => {
        if (genres.length === 0) {
            dispatch(genresSliceActions.loadGenres());
        }
    }, []);

    const nextPage = () => {
        setQuery(prev => {
            const params = Object.fromEntries(prev.entries());
            return {
                ...params,
                page: String(page + 1),
            };
        });
    };

    const prevPage = () => {
        if (page > 1) {
            setQuery(prev => {
                const params = Object.fromEntries(prev.entries());
                return {
                    ...params,
                    page: String(page - 1),
                };
            });
        }
    };

    const selectGenre = (id: number | null) => {
        if (id) {
            setQuery({ page: "1", genreId: String(id) });
        } else {
            setQuery({ page: "1", genreId: '' });
        }
    };

    const moviesToShow = searchResults.length ? searchResults : movies;

    return (
        <div className="container">
            <MoviesLayoutComponent
                movies={moviesToShow}
                genres={genres}
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
                onSelectGenre={selectGenre}/>

            {!searchResults.length && (
                <PaginationComponent
                    page={page}
                    nextPage={nextPage}
                    prevPage={prevPage}/>
            )}
        </div>
    );
};

export default MoviesListComponent;
