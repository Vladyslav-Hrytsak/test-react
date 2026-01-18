import type {IGenre} from "../../models/IGenre";
import type {FC} from "react";
import './GenresListComponent.css'

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
            }}>
            {genre.name}
        </button>
    );
};

export default GenresListComponent;
