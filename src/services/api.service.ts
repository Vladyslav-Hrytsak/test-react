import axios from "axios";
import type {IGenre} from "../models/IGenre.ts";
import type {IMoviesResponseModel} from "../models/IMoviesResponceModel.ts";
import type {IMovie} from "../models/IMovie.ts";


const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTcwYzEyMTdiYmU0NzE2Nzc3YzY3MGJiODA0OTMyZiIsIm5iZiI6MTc2Nzc5MjgyMi4wMDg5OTk4LCJzdWIiOiI2OTVlNjBiNjhlMGQ4ODU1MTNjZWFhZjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6_aCoS-942_sSWVVGAsOvBK5FfzgYjyHwkpdn108pIw"
    }
});


export const getMovies = async (page: number): Promise<IMoviesResponseModel> => {
    const { data } = await axiosInstance.get(`/discover/movie?page=${page}`);
    return data;
};

export const getSearchMoviesList = async (query: string): Promise<IMoviesResponseModel> => {
    const { data } = await axiosInstance.get(`/search/movie?query=${encodeURIComponent(query)}&language=ru-RU&page=1&include_adult=false`);
    return data;
};


export const getMovieById = async (id: number): Promise<IMovie> => {
    const { data } = await axiosInstance.get(`/movie/${id}`);
    return data;
};



export const getMoviesByGenres = async (page: number, genre:number): Promise<IMoviesResponseModel> => {
    const { data } = await axiosInstance.get(`/discover/movie?page=${page}&with_genres=${genre}`);
    return data;
};


export const getGenres = async (endpoint: string): Promise<IGenre[]> => {
    const { data } = await axiosInstance.get<{ genres: IGenre[] }>(endpoint)
    return data.genres
}


