import type {MoviesSliceType} from "./movies-types.ts";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {loadMovieById, loadMovies, loadMoviesByGenre, searchMovies} from "./movies-thunks.ts";
import type {IMovie} from "../../../models/IMovie.ts";


const initialState: MoviesSliceType = {
    movies: [],
    searchResults: [],
    movie: null,
    page: 1,
    totalPages: 1,
    isLoading: false,
    error: null
};




export const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        clearSearchResults: (state) => {
            state.searchResults = [];
        },
        clearError: (state) => {
            state.error = null;
        }
    },
    extraReducers: builder => {
        builder

            .addCase(loadMovies.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loadMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.totalPages = action.payload.total_pages;
                state.searchResults = [];
            })
            .addCase(loadMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.message || "Failed to load movies";
            })

            .addCase(loadMoviesByGenre.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loadMoviesByGenre.fulfilled, (state, action) => {
                state.isLoading = false;
                state.movies = action.payload.results;
                state.page = action.payload.page;
                state.totalPages = action.payload.total_pages;
                state.searchResults = [];
            })
            .addCase(loadMoviesByGenre.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.message || "Failed to load movies by genre";
            })

            .addCase(loadMovieById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loadMovieById.fulfilled, (state, action: PayloadAction<IMovie>) => {
                state.isLoading = false;
                state.movie = action.payload;
            })
            .addCase(loadMovieById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.message || "Failed to load movie";
            })

            .addCase(searchMovies.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.isLoading = false;
                state.searchResults = action.payload;
            })
            .addCase(searchMovies.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload?.message || "Search failed";
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
