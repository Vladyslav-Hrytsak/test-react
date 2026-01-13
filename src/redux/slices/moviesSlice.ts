import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IMoviesResponseModel } from "../../models/IMoviesResponceModel.ts";
import { getMovieById, getMovies, getMoviesByGenres, getSearchMoviesList } from "../../services/api.service.ts";
import type { IMovie } from "../../models/IMovie.ts";

type MoviesSliceType = {
    movies: IMovie[];
    searchResults: IMovie[];  // новое состояние для поиска
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

// thunk для поиска фильмов
export const searchMovies = createAsyncThunk(
    "moviesSlice/searchMovies",
    async (query: string, thunkAPI) => {
        try {
            const data = await getSearchMoviesList(query);
            return thunkAPI.fulfillWithValue(data.results);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const loadMovies = createAsyncThunk(
    "moviesSlice/loadMovies",
    async (page: number, thunkAPI) => {
        try {
            const data = await getMovies(page);
            return thunkAPI.fulfillWithValue(data);
        } catch (e) {
            return thunkAPI.rejectWithValue(e);
        }
    }
);

export const loadMovieById = createAsyncThunk(
    "moviesSlice/loadMovieById",
    async (id: number, thunkAPI) => {
        try {
            const data = await getMovieById(id);
            return thunkAPI.fulfillWithValue(data);
        } catch (e: any) {
            return thunkAPI.rejectWithValue({
                message: e.message,
                status: e.response?.status
            });
        }
    }
);

export const loadMoviesByGenre = createAsyncThunk(
    "moviesSlice/loadMoviesByGenre",
    async ({ page, genreId }: { page: number; genreId: number }, thunkAPI) => {
        try {
            const data = await getMoviesByGenres(page, genreId);
            return thunkAPI.fulfillWithValue(data);
        }
        catch (e) {
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
            .addCase(loadMovies.pending, (state) => { state.isLoading = true; })
            .addCase(loadMovies.fulfilled, (state, action: PayloadAction<IMoviesResponseModel>) => {
                state.isLoading = false;
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(loadMovies.rejected, (state) => { state.isLoading = false; })

            .addCase(loadMoviesByGenre.pending, (state) => { state.isLoading = true; })
            .addCase(loadMoviesByGenre.fulfilled, (state, action: PayloadAction<IMoviesResponseModel>) => {
                state.isLoading = false;
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.totalPages = action.payload.total_pages;
            })
            .addCase(loadMoviesByGenre.rejected, (state) => { state.isLoading = false; })

            .addCase(loadMovieById.fulfilled, (state, action: PayloadAction<IMovie>) => {
                state.movie = action.payload;
            })
            .addCase(loadMovieById.rejected, (state, action) => {
                console.log(state);
                console.log(action);
            })

            .addCase(searchMovies.pending, (state) => { state.isLoading = true; })
            .addCase(searchMovies.fulfilled, (state, action: PayloadAction<IMovie[]>) => {
                state.isLoading = false;
                state.searchResults = action.payload;
            })
            .addCase(searchMovies.rejected, (state) => { state.isLoading = false; });
    }
});

export const moviesSliceActions = {
    ...moviesSlice.actions,
    loadMovies,
    loadMoviesByGenre,
    loadMovieById,
    searchMovies
};
