import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { moviesSliceActions } from "../../redux/slices/moviesSlice";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch.ts";
import {useAppSelector} from "../../redux/hooks/useAppSelector.ts";
import {getSearchMoviesList} from "../../services/api.service.ts";
import type {IMovie} from "../../models/IMovie.ts";

interface IFormData {
    title: string;
}

function SearchComponent() {
    const { register, handleSubmit, watch } = useForm<IFormData>();

    const dispatch = useAppDispatch();
    const searchResults = useAppSelector(state => state.moviesSlice.searchResults);

    const [suggestions, setSuggestions] = useState<IMovie[]>([]);

    const query = watch("title");

    useEffect(() => {
        if (!query) {
            setSuggestions([]);
            return;
        }

        const timeoutId = setTimeout(async () => {
            // только для подсказок, не трогаем searchResults
            const data = await getSearchMoviesList(query);
            setSuggestions(data.results.slice(0, 5)); // максимум 5 подсказок
        }, 300);

        return () => clearTimeout(timeoutId);
    }, [query]);

    const onSubmit = async (data: IFormData) => {
        // диспатчим поиск только при сабмите
        dispatch(moviesSliceActions.searchMovies(data.title));
        setSuggestions([]); // скрываем подсказки
    };


    return (
        <div style={{ position: "relative", width: "300px" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="Search film..."
                    {...register("title")}
                    autoComplete="off"
                />
                <button type="submit">Search</button>
            </form>

            {suggestions.length > 0 && (
                <ul
                    style={{
                        position: "absolute",
                        top: "40px",
                        left: 0,
                        width: "100%",
                        background: "white",
                        border: "1px solid #ccc",
                        listStyle: "none",
                        padding: "5px",
                        margin: 0,
                        zIndex: 10
                    }}
                >
                    {suggestions.map((movie) => (
                        <li key={movie.id} style={{ padding: "5px 0" }}>
                            {movie.title}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchComponent;
