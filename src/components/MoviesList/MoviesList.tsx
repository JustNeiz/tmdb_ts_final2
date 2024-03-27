import css from './MoviesList.module.css'
import {FC} from "react";
import MovieListCard from "../MovieListCard/MovieListCard.tsx";
import {IResponseBase} from "../../types/responseBase.type.ts";
interface Props {
    movieResponse: IResponseBase
}

const MoviesList : FC<Props> = ({movieResponse}) => {

    return (
        <div className={css.MoviesList}>
            {
                movieResponse.results && movieResponse.results.map((movie) => <MovieListCard movie={movie} key={movie.id}/>)
            }
        </div>

    );
};

export default MoviesList;