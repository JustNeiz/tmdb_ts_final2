import {Outlet} from "react-router-dom";
import css from './MainLayout.module.css'
import Header from "../components/Header/Header.tsx";
import {useAppSelector} from "../hooks/reduxHooks.ts";
const MainLayout = () => {
    const theme = localStorage.getItem('theme')
    const theme1 = useAppSelector(state => state.moviesResponse.darkTheme);
    return (
        <div className={theme || theme1 ? css.MainLayoutDark : css.MainLayout}>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;