import StarsRatingComponent from "../StarsRatingComponent.tsx";
import type { FC } from "react";
import { Link } from "react-router";
import "./MovieCardComponent.css";
import type { IMovieShort } from "../../models/IMovieShort.ts";

interface MovieCardComponentProps {
    movie: IMovieShort;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

const MovieCardComponent: FC<MovieCardComponentProps> = ({ movie }) => {
    return (
        <Link to={`/movies/${movie.id}`} className={"card"}>
            <div
                style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    width: "250px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: "100%", borderRadius: "6px" }}
                />

                <h3>{movie.title}</h3>

                <div style={{ fontSize: "12px", color: "gray" }}>
                    {movie.original_title}
                </div>

                <StarsRatingComponent rating={movie.vote_average} />

                <div style={{ fontSize: "12px", color: "gray" }}>
                    {movie.vote_average} / 10
                </div>

                <div style={{ fontSize: "12px", color: "gray" }}>
                    Release: {movie.release_date}
                </div>

                <p style={{ fontSize: "14px" }}>{movie.overview}</p>

                {/* жанры — только ID */}
                <div>
                    {movie.genre_ids?.map((id) => (
                        <span
                            key={id}
                            style={{
                                fontSize: "12px",
                                padding: "2px 6px",
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                                marginRight: "5px",
                            }}
                        >
                            #{id}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default MovieCardComponent;
