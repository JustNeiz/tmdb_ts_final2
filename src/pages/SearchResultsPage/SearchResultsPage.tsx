import {memo, useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import MoviesList from "../../components/MoviesList/MoviesList";
import {movieService} from "../../services/movieService.ts";
import {IResponseBase} from "../../types/responseBase.type.ts";

const SearchResultPage = memo(() => {
    const [query] = useSearchParams();
    const [results, setResults] = useState<IResponseBase | null>(null)

    const request = query.get('query');
    const page  = query.get('page');

    useEffect(() => {

        movieService.search(request as string, page as string).then(({data})=>{
            // request = query.get('query');
            setResults(data);
        } )
    }, [request, page]);

    return (
        <div>
            <h2>Search results for {request}</h2>
            {
                results &&  <MoviesList movieResponse={results}/>
            }
        </div>
    );
})

export default SearchResultPage;