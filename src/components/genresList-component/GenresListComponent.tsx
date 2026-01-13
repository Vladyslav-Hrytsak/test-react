import type {IGenre} from "../../models/IGenre";
import type {FC} from "react";

interface GenresListComponentProps {
    genre: IGenre,
    onSelectGenre: ((id: number) => void) | undefined
}

const GenresListComponent: FC<GenresListComponentProps> = ({genre, onSelectGenre}) => {
    return (
        <button
            onClick={() => {
                if (onSelectGenre) {
                    onSelectGenre(genre.id)
                }
            }}
            style={{
                padding: "8px 12px",
                borderRadius: "8px",
                background: "#fff",
                cursor: "pointer",
                fontSize: "14px",
                transition: "0.2s",
            }}
        >
            {genre.name}
        </button>
    );
};

export default GenresListComponent;
