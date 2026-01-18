import {configureStore} from "@reduxjs/toolkit";
import {moviesSlice} from "./slices/movies-slice/moviesSlice.ts";
import {genresSlice} from "./slices/genresSlice.ts";


export const store = configureStore({
    reducer: {
        moviesSlice: moviesSlice.reducer,
        genresSlice: genresSlice.reducer,
    }
}
);