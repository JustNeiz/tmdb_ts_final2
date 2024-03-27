import css from './MovieListCard.module.css'
import {IMovie} from "../../types/movie.type.ts";
import {FC} from "react";
import {Badge, Rating} from "@mui/material";
import {imgBaseUrl} from "../../constants/urls.ts";
import {useNavigate} from "react-router-dom";

interface Props {
    movie: IMovie
}
const MovieListCard : FC<Props> = ({movie}) => {
    const navigate = useNavigate();
    const {title, overview, vote_average} = movie;
    let voteAverage =null;
    if(movie.vote_average>=8){
        voteAverage = 'High rating movie';
    }
    return (
        <div className={css.MoviesListCardContainer}>
            <div className={css.MoviesListCard}
                 style={{ backgroundImage: `url('${imgBaseUrl}${movie.poster_path}')` }}
                 onClick={() => navigate(`/movie?movieId=${movie.id}`)}
            >
                <Badge color={'primary'}
                       badgeContent={voteAverage}>
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
                </Badge>
                <div className={css.Title}>
                    <span>{overview}</span>
                </div>
            </div>
            <h6>{title}</h6>
        </div>
    );
};

export default MovieListCard;