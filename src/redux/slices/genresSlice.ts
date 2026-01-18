
import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getGenres} from "../../services/api.service.ts";
import type {IGenre} from "../../models/IGenre.ts";

export type GenresSlice = {
    genres: IGenre[];
}


const loadGenres = createAsyncThunk(
    'genresSlice/loadGenres',
    async (_, thunkAPI)=>{
        try {
            const genres = await getGenres('/genre/movie/list')
            return thunkAPI.fulfillWithValue(genres)
        }
        catch (e){
            return thunkAPI.rejectWithValue(e)
        }
    }
)


const initialState:GenresSlice = {genres:[]};

export const genresSlice = createSlice({
        name: "genresSlice",
        initialState: initialState,
        reducers:{},
        extraReducers: builder =>
            builder
                .addCase(loadGenres.fulfilled, (state, action:PayloadAction<IGenre[]>)=>{
                    state.genres = action.payload
                })
                .addCase(loadGenres.rejected, (state, action)=>{
                    console.log(state)
                    console.log(action)

                })
    }
)

export const genresSliceActions = {
    ...genresSlice.actions, loadGenres
}