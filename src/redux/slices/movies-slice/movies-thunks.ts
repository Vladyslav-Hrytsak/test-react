import type {IMovie} from "../../../models/IMovie.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {getMovieById, getMovies, getMoviesByGenres, getSearchMoviesList} from "../../../services/api.service.ts";
import type {IMoviesResponseModel} from "../../../models/IMoviesResponceModel.ts";
import type {IMovieShort} from "../../../models/IMovieShort.ts";

export const searchMovies = createAsyncThunk<IMovieShort[], string, { rejectValue: { message: string; status?: number } }>(
    "moviesSlice/searchMovies",
    async (query, thunkAPI) => {
        try {
            const data = await getSearchMoviesList(query);
            return data.results;
        } catch (e: any) {
            return thunkAPI.rejectWithValue({
                message: e.message,
                status: e.response?.status
            });
        }
    }
);

export const loadMovies = createAsyncThunk<IMoviesResponseModel, number, { rejectValue: { message: string; status?: number } }>(
    "moviesSlice/loadMovies",
    async (page, thunkAPI) => {
        try {
            const data = await getMovies(page);
            return data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue({
                message: e.message,
                status: e.response?.status
            });
        }
    }
);

export const loadMovieById = createAsyncThunk<IMovie, number, { rejectValue: { message: string; status?: number } }>(
    "moviesSlice/loadMovieById",
    async (id, thunkAPI) => {
        try {
            const data = await getMovieById(id);
            return data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue({
                message: e.message,
                status: e.response?.status
            });
        }
    }
);

export const loadMoviesByGenre = createAsyncThunk<IMoviesResponseModel, { page: number; genreId: number }, { rejectValue: { message: string; status?: number } }>(
    "moviesSlice/loadMoviesByGenre",
    async ({ page, genreId }, thunkAPI) => {
        try {
            const data = await getMoviesByGenres(page, genreId);
            return data;
        } catch (e: any) {
            return thunkAPI.rejectWithValue({
                message: e.message,
                status: e.response?.status
            });
        }
    }
);