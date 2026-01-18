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
        <Link to={`/movies/${movie.id}`} className="movie-card">
            <div className="movie-card__container">
                <img
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    className="movie-card__poster"/>

                <h3 className="movie-card__title">{movie.title}</h3>

                <div className="movie-card__original-title">{movie.original_title}</div>

                <StarsRatingComponent rating={movie.vote_average} />

                <div className="movie-card__rating">{movie.vote_average} / 10</div>

                <div className="movie-card__release">Release: {movie.release_date}</div>

                <p className="movie-card__overview">{movie.overview}</p>

                <div className="movie-card__genres">
                    {movie.genre_ids?.map((id) => (
                        <span key={id} className="movie-card__genre">
                            #{id}
                        </span>
                    ))}
                </div>
            </div>
        </Link>
    );
};

export default MovieCardComponent;
