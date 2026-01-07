import {configureStore} from "@reduxjs/toolkit";
import {moviesSlice} from "./slices/moviesSlice.ts";


export const store = configureStore({
    reducer: {
        moviesSlice: moviesSlice.reducer,
        // genresSlice: genresSlice.reducer,
    }
}
);