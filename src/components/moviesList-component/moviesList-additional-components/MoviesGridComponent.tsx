import type {IMovie} from "../../../models/IMoviesResponceModel.ts";
import MovieCardComponent from "../../movieCard-component/MovieCardComponent.tsx";

interface Props {
    movies: IMovie[],
}

const MoviesGridComponent = ({movies}: Props) => {
    return (
        <div className="moviesList">
            {movies.map(movie => (<MovieCardComponent key={movie.id} movie={movie} />))}
        </div>
    );
};

export default MoviesGridComponent;
