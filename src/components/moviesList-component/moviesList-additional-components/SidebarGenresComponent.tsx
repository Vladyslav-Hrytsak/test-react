import type { IGenre } from "../../../models/IGenre.ts";
import GenresListComponent from "../../genresList-component/GenresListComponent.tsx";
import { useAppDispatch } from "../../../redux/hooks/useAppDispatch";
import { moviesSliceActions } from "../../../redux/slices/moviesSlice";

interface Props {
    genres: IGenre[];
    isSidebarOpen: boolean;
    setIsSidebarOpen: (value: boolean) => void;
    onSelectGenre?: (id: number | null) => void;
}

const SidebarGenresComponent = ({genres, isSidebarOpen, setIsSidebarOpen, onSelectGenre}: Props) => {
    const dispatch = useAppDispatch();

    const handleBackToAllFilms = () => {
        if (onSelectGenre) {
            onSelectGenre(null);
        }
        dispatch(moviesSliceActions.clearSearchResults());
    };

    return (
        <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
            <button
                className="toggleBtn"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? "←" : "→"}
            </button>

            <h3 className="sidebarTitle">Genres</h3>

            <div className="genresList">
                {genres.map(genre => (
                    <GenresListComponent
                        key={genre.id}
                        genre={genre}
                        onSelectGenre={onSelectGenre}
                    />
                ))}

                <button onClick={handleBackToAllFilms} className="closeBtn">
                    Back to all films
                </button>
            </div>
        </div>
    );
};

export default SidebarGenresComponent;
