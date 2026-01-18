import SidebarGenresComponent from "./SidebarGenresComponent";
import MoviesGridComponent from "./MoviesGridComponent";
import type {IGenre} from "../../../models/IGenre.ts";
import type {IMovieShort} from "../../../models/IMovieShort.ts";



interface Props {
    movies: IMovieShort[],
    genres: IGenre[],
    isSidebarOpen: boolean,
    setIsSidebarOpen: (value: boolean) => void,
    onSelectGenre: (id: number | null) => void,
}

const MoviesLayoutComponent = ({movies, genres, isSidebarOpen, setIsSidebarOpen, onSelectGenre}: Props) => {
    return (
        <div className="content">
            <SidebarGenresComponent genres={genres} isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} onSelectGenre={onSelectGenre}/>

            <MoviesGridComponent movies={movies}/>
        </div>
    );
};

export default MoviesLayoutComponent;
