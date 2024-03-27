import {useNavigate} from "react-router-dom";

import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import css from './Header.module.css'
import Sidebar from "../Sidebar/Sidebar.tsx";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.tsx";
import NavigationBlock from "../NavigationBlock/NavigationBlock.tsx";
import SearchBlock from "../SearchBlock/SearchBlock.tsx";
import LoginBlock from "../LoginBlock/LoginBlock.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks.ts";
import {moviesActions} from "../../store/slices/moviesReducer.ts";

const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const theme = localStorage.getItem('theme')
    const theme1 = useAppSelector(state => state.moviesResponse.darkTheme);

    const goHome = () => {

        dispatch(moviesActions.getByPage('1'))

            navigate('/main?page=1')
            window.scrollTo(0,0)

    }
    return (
        <div className={theme1||theme ? css.HeaderDark : css.Header}>
            <div className={css.genres}>
                <h2 onClick={()=>goHome()}>COMPANY</h2>
                <Sidebar/>
            </div>
            <div className={css.themes}>
                <WbSunnyIcon/>
                <ThemeSwitcher/>
                <DarkModeIcon/>
            </div>
            <div>
                <NavigationBlock/>
            </div>
            <span>Стилизированный поиск---&gt;</span>
            <div>
                <SearchBlock/>
            </div>
            <div>
                <LoginBlock/>
            </div>
        </div>
    );
};

export default Header;