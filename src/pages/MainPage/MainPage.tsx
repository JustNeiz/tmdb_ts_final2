import css from './MainPage.module.css'
import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import MoviesList from "../../components/MoviesList/MoviesList.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
import {moviesActions} from "../../store/slices/moviesReducer.ts";
import PaginationContainer from "../../components/PaginationContainer/PaginationContainer.tsx";
const  MainPage = () => {
    const [params] = useSearchParams();
    const dispatch = useAppDispatch();

    useEffect(() => {
        const fetchData = async () => {
            if (!params.get('genre')) {
                await dispatch(moviesActions.getByPage(params.get('page') as string));
            } else {
                await dispatch(moviesActions.getByGenre([params.get('genre'), params.get('page')] as [string, string]));
            }
        };


        fetchData();
    }, [params.get('page'), params.get('genre')]);
    const response = useAppSelector(state => state.moviesResponse.base)

    const theme = localStorage.getItem('theme')
    const theme1 = useAppSelector(state => state.moviesResponse.darkTheme);


    return (
        <div className={theme || theme1 ? css.MainPageDark : css.MainPage}>
            <MoviesList movieResponse={response}/>
            <MoviesList movieResponse={response}/>
            <PaginationContainer total_pages={response.total_pages}/>
        </div>
    );
};

export default MainPage;