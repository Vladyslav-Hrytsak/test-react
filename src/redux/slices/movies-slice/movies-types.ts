import type {IMovie} from "../../../models/IMovie.ts";
import type {IMovieShort} from "../../../models/IMovieShort.ts";

export type MoviesSliceType = {
    movies: IMovieShort[];
    searchResults: IMovieShort[];
    movie: IMovie | null;
    page: number;
    totalPages: number;
    isLoading: boolean;
    error: string | null;
};