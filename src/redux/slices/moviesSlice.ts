import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {IMovie} from "../../models/IMoviesResponceModel.ts";
import {getMovies} from "../../services/api.service.ts";

export type MoviesSlice = {
    movies: IMovie[]
}


const loadMovies = createAsyncThunk(
    'moviesSlice/loadMovies',
    async (_, thunkAPI)=>{
        try {
            const movies = await getMovies('/discover/movie')
            return thunkAPI.fulfillWithValue(movies)
        }
        catch (e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)


const initialState:MoviesSlice = {movies:[]};

export const moviesSlice = createSlice({
    name: "moviesSlice",
    initialState: initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(loadMovies.fulfilled, (state, action:PayloadAction<IMovie[]>)=>{
                state.movies = action.payload
            })
            .addCase(loadMovies.rejected, (state, action)=>{
                console.log(state)
                console.log(action)

            })
}
)


export const moviesSliceActions = {
    ...moviesSlice.actions, loadMovies
}