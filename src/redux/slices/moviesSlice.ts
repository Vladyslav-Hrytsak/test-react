import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { IMoviesResponseModel } from "../../models/IMoviesResponceModel.ts";
import { getMovieById, getMovies, getMoviesByGenres, getSearchMoviesList } from "../../services/api.service.ts";
import type { IMovie } from "../../models/IMovie.ts";

type MoviesSliceType = {
    movies: IMovie[];
    searchResults: IMovie[];
    movie: IMovie | null;
    page: number;
    totalPages: number;
    isLoading: boolean;
};

const initialState: MoviesSliceType = {
    movies: [],
    searchResults: [],
    movie: null,
    page: 1,
    totalPages: 1,
    isLoading: false,
};



export const searchMovies = createAsyncThunk<IMovie[], string>(
    "moviesSlice/searchMovies",
    async (query, thunkAPI) => {
        try {
            const data = await getSearchMoviesList(query);
            return data.results;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const loadMovies = createAsyncThunk<IMoviesResponseModel, number>(
    "moviesSlice/loadMovies",
    async (page, thunkAPI) => {
        try {
            const data = await getMovies(page);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const loadMovieById = createAsyncThunk<IMovie, number>(
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

export const loadMoviesByGenre = createAsyncThunk<IMoviesResponseModel, { page: number; genreId: number }>(
    "moviesSlice/loadMoviesByGenre",
    async ({ page, genreId }, thunkAPI) => {
        try {
            const data = await getMoviesByGenres(page, genreId);
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);



export const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        clearSearchResults: (state) => {
            state.searchResults = [];
        }
    },
    extraReducers: builder => {
        builder
            // ---- LOAD MOVIES ----
            .addCase(loadMovies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.totalPages = action.payload.total_pages;
                state.searchResults = []; // 🔥 сбрасываем поиск
            })
            .addCase(loadMovies.rejected, (state) => {
                state.isLoading = false;
            })

            .addCase(loadMoviesByGenre.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(loadMoviesByGenre.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.totalPages = action.payload.total_pages;
                state.searchResults = []; // 🔥 сбрасываем поиск
            })
            .addCase(loadMoviesByGenre.rejected, (state) => {
                state.isLoading = false;
            })

            .addCase(loadMovieById.fulfilled, (state, action) => {
                state.movie = action.payload;
            })

            .addCase(searchMovies.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.searchResults = action.payload;
            })
            .addCase(searchMovies.rejected, (state) => {
                state.isLoading = false;
            });
    }
});


export const moviesSliceActions = {
    ...moviesSlice.actions,
    loadMovies,
    loadMoviesByGenre,
    loadMovieById,
    searchMovies
};
