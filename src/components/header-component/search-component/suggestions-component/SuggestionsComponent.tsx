import type { IMovieShort } from "../../../../models/IMovieShort.ts";
import './SuggestionsComponent.css';

interface SuggestionsComponentProps {
    suggestions: IMovieShort[];
    onSelect: (title: string) => void;
}

const SuggestionsComponent = ({ suggestions, onSelect }: SuggestionsComponentProps) => {
    return (
        <ul className="suggestions-list">
            {suggestions.map((movie) => (
                <li
                    key={movie.id}
                    className="suggestion-item"
                    onClick={() => onSelect(movie.title)}
                >
                    {movie.title}
                </li>
            ))}
        </ul>
    );
};

export default SuggestionsComponent;
