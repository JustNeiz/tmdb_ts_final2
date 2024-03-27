import {IMovieDetail} from "../../types/movieDetail.type.ts";
import {FC} from "react";
import css from './MovieInfo.module.css'
import {Rating} from "@mui/material";
import {useAppSelector} from "../../hooks/reduxHooks.ts";

interface Props {
    movieInfo : IMovieDetail
}

const MovieInfo : FC<Props> = ({movieInfo}) => {
const theme1 = useAppSelector(state => state.moviesResponse.darkTheme);
const theme = localStorage.getItem('theme')
    const {genres, overview, title, release_date, poster_path, vote_average} = movieInfo
    return (
        <div className={theme || theme1 ? css.moviePageDark : css.moviePage}>
            <div className={css.moviePoster}>
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
            </div>
            <div className={css.movieDetails}>
                <h1>{title}</h1>
                <div className={css.Stars}>
                    <Rating
                        value={vote_average}
                        name="simple-controlled"
                        max={10}
                        precision={0.1}
                        readOnly={true}
                        defaultValue={vote_average}
                    />
                    <span>{vote_average}/10</span>
                </div>
                <p><strong>Release Date:</strong> {release_date}</p>
                <p><strong>Genres:</strong> {genres.map(genre => genre.name).join(', ')}</p>
                <p><strong>Overview:</strong> {overview}</p>
            </div>
        </div>
    );
};

export default MovieInfo;