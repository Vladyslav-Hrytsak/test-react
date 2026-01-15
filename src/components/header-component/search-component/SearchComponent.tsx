import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { moviesSliceActions } from "../../../redux/slices/moviesSlice.ts";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch.ts";
import {getSearchMoviesList} from "../../../services/api.service.ts";
import type {IMovie} from "../../../models/IMovie.ts";
import {useNavigate} from "react-router";
import SuggestionsComponent from "./suggestions-component/SuggestionsComponent.tsx";

import './SearchComponent.css'

interface IFormData {
    title: string;
}

function SearchComponent() {
    const { register, handleSubmit, watch } = useForm<IFormData>();

    const dispatch = useAppDispatch();
    // const searchResults = useAppSelector(state => state.moviesSlice.searchResults);

    const [suggestions, setSuggestions] = useState<IMovie[]>([]);

    const query = watch("title");

    useEffect(() => {
        if (!query) {
            setSuggestions([]);
            return;
        }

        const timeoutId = setTimeout(async () => {
            const data = await getSearchMoviesList(query);
            setSuggestions(data.results.slice(0, 5));
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [query]);

    const navigate = useNavigate();

    const onSubmit = async (data: IFormData) => {
        dispatch(moviesSliceActions.searchMovies(data.title));
        setSuggestions([]);
        navigate("/");
    };


    const handleSuggestionClick = (title: string) => {
        dispatch(moviesSliceActions.searchMovies(title));
        setSuggestions([]);
        navigate("/");
    };

    return (
        <div className="search">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"  placeholder="Search film..."{...register("title")} autoComplete="off"/>
                <button type="submit">Search</button>
            </form>

            {suggestions.length > 0 && <SuggestionsComponent suggestions = {suggestions} onSelect={handleSuggestionClick}/>}
        </div>
    );
}

export default SearchComponent;
