import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer} from "./slices/moviesReducer.ts";

const store = configureStore({
    reducer: {
        moviesResponse: moviesReducer
    }
})
export {store}