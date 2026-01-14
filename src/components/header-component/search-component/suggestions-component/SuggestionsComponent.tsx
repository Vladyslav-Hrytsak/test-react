import type { IMovie } from "../../../../models/IMovie.ts";

interface SuggestionsComponentProps {
    suggestions: IMovie[];
    onSelect: (title: string) => void;
}

const SuggestionsComponent = ({ suggestions, onSelect }: SuggestionsComponentProps) => {
    return (
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
                <li key={movie.id} style={{ padding: "5px 0", cursor: "pointer" }}
                    onClick={() => onSelect(movie.title)}>
                    {movie.title}
                </li>
            ))}
        </ul>
    );
};

export default SuggestionsComponent;
