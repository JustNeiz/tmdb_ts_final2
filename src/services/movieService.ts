import {urla} from "../constants/urls.ts";
import {apiService} from "./apiService.ts";
import {AxiosResponse} from "axios";
import {IResponseBase} from "../types/responseBase.type.ts";
import {IMovieDetail} from "../types/movieDetail.type.ts";
import {IGenres} from "../types/genres.type.ts";

const movieService = {
    getByPage: async (page:string) : Promise<AxiosResponse<IResponseBase>> => await apiService(urla.movies.base+`?page=${page}`),
    getById: async (id: string) : Promise<AxiosResponse<IMovieDetail>> => await  apiService(urla.movies.byId+`/${id}`),
    getMovieByGenderId: (genderId : string, page : string) : Promise<AxiosResponse<IResponseBase>> => apiService(urla.movies.base+`?with_genres=${genderId}&page=${page}`),
    search: (request : string, page : string) : Promise<AxiosResponse<IResponseBase>> => apiService(urla.search.byWord+`?query=${request}&page=${page}`),
    getGenresList: async () : Promise<AxiosResponse<IGenres>> => await apiService.get(urla.genre.base)
}
export {movieService}