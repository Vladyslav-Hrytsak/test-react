import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {useParams} from "react-router";
import {moviesSliceActions} from "../../redux/slices/movies-slice/moviesSlice.ts";
import {useEffect} from "react";
import MovieComponent from "./movie-component/MovieComponent.tsx";

const MovieDetailsComponent = () => {

    const dispatch = useAppDispatch();
    const { movie, isLoading } = useAppSelector(({ moviesSlice }) => moviesSlice);

    const { id } = useParams();
    const movieId = Number(id);

    useEffect(() => {
        if (!isNaN(movieId)) {
            dispatch(moviesSliceActions.loadMovieById(movieId));
        }
    }, [movieId]);

    if (isLoading) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            {movie && <MovieComponent movie={movie} />}
        </div>
    );
};

export default MovieDetailsComponent;