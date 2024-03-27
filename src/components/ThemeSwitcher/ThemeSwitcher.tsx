import {Switch} from "@mui/material";
import {useAppDispatch} from "../../hooks/reduxHooks.ts";
import {moviesActions} from "../../store/slices/moviesReducer.ts";

const ThemeSwitcher = () => {
    const dispatch = useAppDispatch();

    const handleChange = () => {
    dispatch(moviesActions.setTheme())
    };
    const theme = localStorage.getItem('theme');

    return (
        <Switch
            checked={Boolean(theme)}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
        />
    );
};

export default ThemeSwitcher;