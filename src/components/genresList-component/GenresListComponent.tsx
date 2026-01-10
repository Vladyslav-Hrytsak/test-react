import type { IGenre } from "../../models/IGenre.ts";
import type { FC } from "react";

interface GenresListComponentProps {
    genre: IGenre;
}

const GenresListComponent: FC<GenresListComponentProps> = ({ genre }) => {
    return (
        <div
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
        </div>
    );
};

export default GenresListComponent;
