import {createAsyncThunk, createSlice, isFulfilled} from "@reduxjs/toolkit";
import {movieService} from "../../services/movieService.ts";
import {AxiosError} from "axios";
import {IResponseBase} from "../../types/responseBase.type.ts";
import {IMovieDetail} from "../../types/movieDetail.type.ts";
import {IGenres} from "../../types/genres.type.ts";

interface IState {
    base: IResponseBase,
    darkTheme: boolean,
    byId: IMovieDetail,
    genresArr: IGenres | null
}

const initialState : IState = {
    base: {
        results: [],
        total_pages: 0,
        total_results: 0,
        page: 0
    },
    darkTheme: false,
    byId: {
        adult: false,
        backdrop_path: '',
        belongs_to_collection: null,
        budget: 0,
        genres: [],
        homepage: '',
        id: 0,
        imdb_id: '',
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        production_companies: [],
        production_countries: [],
        release_date: '',
        revenue: 0,
        runtime: 0,
        spoken_languages: [],
        status: '',
        tagline: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0,
    },
    genresArr: null

};


const getByPage = createAsyncThunk<IResponseBase, string>(
    'moviesReducer/getByPage',
    async (page, {rejectWithValue} )   => {
        try {
            const {data} = await movieService.getByPage(page);
            return data;
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getById = createAsyncThunk<IMovieDetail, string>(
    'moviesReducer/getById',
    async (id, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getById(id);
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }
)

const getByGenre = createAsyncThunk<IResponseBase, [string, string]>(
    'moviesReducer/getByGenre',
    async ([genre, page], {rejectWithValue}) =>{
        try {
            const {data} = await movieService.getMovieByGenderId(genre, page);
            return data;
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }

)
const getAllGenres = createAsyncThunk<IGenres, void>(
    'moviesReducer/getByGenre',
    async (_, {rejectWithValue}) => {
        try {
            const {data} =await movieService.getGenresList();
            return data;
        }catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data)
        }
    }

)


const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setTheme : (state) : void => {
            state.darkTheme = !state.darkTheme;
            localStorage.setItem('theme', state.darkTheme ? `${state.darkTheme}` : '')

        }
    },
    extraReducers: builder => builder
        .addCase(getById.fulfilled, (state, action) => {
            state.byId = action.payload
        })
        .addCase(getAllGenres.fulfilled, (state, action) => {
            state.genresArr = action.payload;
        })
        .addMatcher(isFulfilled(getByGenre, getByPage), (state, action) => {
            state.base = action.payload
        } )


})
const {reducer: moviesReducer, actions} = moviesSlice;
const moviesActions = {
    ...actions,
    getByPage,
    getById,
    getByGenre,
    getAllGenres
}
export { moviesReducer, moviesActions}