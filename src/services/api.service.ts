import axios from "axios";
import type {IMovies} from "../models/IMoviesResponceModel.ts";


const axiosInstance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTcwYzEyMTdiYmU0NzE2Nzc3YzY3MGJiODA0OTMyZiIsIm5iZiI6MTc2Nzc5MjgyMi4wMDg5OTk4LCJzdWIiOiI2OTVlNjBiNjhlMGQ4ODU1MTNjZWFhZjUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.6_aCoS-942_sSWVVGAsOvBK5FfzgYjyHwkpdn108pIw"
    }
});


export const getMovies = async (endpoint:string): Promise<IMovies[]> => {
    const {data} = await axiosInstance.get(endpoint)
    return data.results
}


export const getGenres = async (endpoint:string): Promise<IMovies[]> => {
    const {data} = await axiosInstance.get(endpoint)
    return data.results
}