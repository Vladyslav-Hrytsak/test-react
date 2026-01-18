import type {IMovieShort} from "./IMovieShort.ts";

export interface IMoviesResponseModel {
    page: number
    results: IMovieShort[]
    total_pages: number
    total_results: number
}
