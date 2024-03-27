import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayout from "./layouts/MainLayout.tsx";
import MainPage from "./pages/MainPage/MainPage.tsx";
import MoviePage from "./pages/MoviePage/MoviePage.tsx";
import SearchResultsPage from "./pages/SearchResultsPage/SearchResultsPage.tsx";

const router = createBrowserRouter([
    {
        path: '', element: <MainLayout/>, children: [
            {
                index: true, element: <Navigate to={'main?page=1'}/>
            },
            {
                path: '/main', element: <MainPage/>
            },
            {
                path: 'movie', element: <MoviePage/>
            },
            {
                path: 'results', element: <SearchResultsPage/>
            },
        ]
    }
])

export {router}