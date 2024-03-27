import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
import {moviesActions} from "../../store/slices/moviesReducer.ts";
import {useEffect} from "react";
import MovieInfo from "../../components/MovieInfo/MovieInfo.tsx";
import Zaglushka from "../../components/Zaglushka/Zaglushka.tsx";
import css from './MoviePage.module.css'
import {useSearchParams} from "react-router-dom";

const MoviePage = () => {
    const [params] = useSearchParams();
    const data= useAppSelector(state => state.moviesResponse.byId);
    const dispatch = useAppDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(moviesActions.getById(params.get('movieId') as string));
        }
        fetchData()
    }, []);
    const theme = localStorage.getItem('theme')
    const theme1 = useAppSelector(state => state.moviesResponse.darkTheme);

    return (
        <div className={theme || theme1 ? css.MoviePageDark : css.MoviePage}>
            <MovieInfo movieInfo={data}/>
            <Zaglushka/>
        </div>
    );
};

export default MoviePage;