import {IBelongsToCollection} from "./belongsToCollection.type.ts";
import {IGenre} from "./genre.type.ts";
import {IProductionCompany} from "./productionCompany.type.ts";
import {IProductionCountry} from "./productionCountry.type.ts";
import {ISpokenLanguage} from "./spokenLanguage.type.ts";

export interface IMovieDetail {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: IBelongsToCollection | null,
    budget: number,
    genres: IGenre[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: IProductionCompany[],
    production_countries: IProductionCountry[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: ISpokenLanguage[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}