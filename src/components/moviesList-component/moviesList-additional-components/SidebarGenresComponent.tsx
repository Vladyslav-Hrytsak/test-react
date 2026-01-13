import type {IGenre} from "../../../models/IGenre.ts";
import GenresListComponent from "../../genresList-component/GenresListComponent.tsx";


interface Props {
    genres: IGenre[],
    isSidebarOpen: boolean,
    setIsSidebarOpen: (value: boolean) => void,
    onSelectGenre: ((id: number|null) => void) | undefined
}

const SidebarGenresComponent = ({genres, isSidebarOpen, setIsSidebarOpen, onSelectGenre}: Props) => {
    return (
        <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
            <button className="toggleBtn" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                {isSidebarOpen ? "←" : "→"}
            </button>

            <h3 className="sidebarTitle">Genres</h3>

            <div className="genresList">
                {genres.map(genre => (<GenresListComponent key={genre.id} genre={genre} onSelectGenre={onSelectGenre}/>))}
                <button onClick={() => {
                    if (onSelectGenre) {
                        onSelectGenre(null)
                    }
                }}>
                    Back to all films
                </button>
            </div>
        </div>
    );
};

export default SidebarGenresComponent;
