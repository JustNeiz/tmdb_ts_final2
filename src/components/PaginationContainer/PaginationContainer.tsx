import {FC} from "react";
import {useSearchParams} from "react-router-dom";
import {Pagination} from "@mui/material";
import css from './PaginationContainer.module.css'
import {useAppSelector} from "../../hooks/reduxHooks.ts";

interface Props {
    total_pages: number
}
const PaginationContainer : FC<Props>= ({total_pages}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    let count = total_pages;
    if(total_pages>500){
        count=500;
    }
    const theme = localStorage.getItem('theme')
    const theme1 = useAppSelector(state => state.moviesResponse.darkTheme);

    return (
        <div className={css.PaginationContainer}>
            <Pagination count={count}
                        onChange={(_, page) =>
                            setSearchParams(prev => {
                                prev.set('page', page.toString());
                                window.scrollTo(0,0)
                                return prev;
                            })}
                        page={Number(searchParams?.get('page'))}
                        sx={{
                            '& .MuiPaginationItem-root': {
                                color: theme || theme1 ? '#899b0c' : 'black',
                            }}}
            />
        </div>
    );
};

export default PaginationContainer;