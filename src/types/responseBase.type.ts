import {IMovie} from "./movie.type.ts";

export interface IResponseBase {
    page: number,
    results: IMovie[],
    total_pages: number,
    total_results: number
}