import MovieCardComponent from "../../movieCard-component/MovieCardComponent.tsx";
import type {IMovieShort} from "../../../models/IMovieShort.ts";

interface Props {
    movies: IMovieShort[],
}

const MoviesGridComponent = ({movies}: Props) => {
    return (
        <div className="moviesList">
            {movies.map(movie => (<MovieCardComponent key={movie.id} movie={movie} />))}
        </div>
    );
};

export default MoviesGridComponent;
