
import css from './SearchBlock.module.css'
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



interface SearchFormInput {
    searchRequest: string;
}
const SearchBlock = () => {
    const {register, handleSubmit} = useForm<SearchFormInput>()
    const navigate = useNavigate();



    const search = (searchObj : SearchFormInput) => {
        navigate({pathname: '/results', search: `page=1&query=${searchObj.searchRequest}`})
    }


    return (
        <div className={css.SearchBlock} id={'search'}>
            <form onSubmit={handleSubmit(search)}>
                <TextField label="Search film"
                           variant="standard"
                           color={"primary"}
                           {...register('searchRequest')}

                           />
                <Button variant="text" onClick={handleSubmit(search)}>Search</Button>

            </form>
        </div>
    );
};

export default SearchBlock;