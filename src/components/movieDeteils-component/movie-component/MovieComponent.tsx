import type { IMovie } from "../../../models/IMovie.ts";
import type { FC } from "react";
import "./MovieComponent.css";

interface MovieDetailsComponentProps {
    movie: IMovie;
}

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

const MovieComponent: FC<MovieDetailsComponentProps> = ({ movie }) => {
    return (
        <div className="movie-details">

            {/* Backdrop */}
            <div
                className="backdrop"
                style={{
                    backgroundImage: `url(${IMAGE_BASE_URL}${movie.backdrop_path})`
                }}
            >
                <div className="backdrop-overlay" />
            </div>

            <div className="movie-content">

                {/* Poster */}
                <div className="poster">
                    <img
                        src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                        alt={movie.title}
                    />
                </div>

                {/* Info */}
                <div className="info">

                    <h1 className="title">
                        {movie.title}
                        <span className="year">
                            ({new Date(movie.release_date).getFullYear()})
                        </span>
                    </h1>

                    <div className="tagline">{movie.tagline}</div>

                    <div className="meta">
                        <span>⭐ {movie.vote_average.toFixed(1)}</span>
                        <span>⏱ {movie.runtime} min</span>
                        <span>📅 {movie.release_date}</span>
                    </div>

                    {/* Genres */}
                    <div className="genres">
                        {movie.genres.map((genre) => (
                            <span key={genre.id} className="genre-badge">
                                {genre.name}
                            </span>
                        ))}
                    </div>

                    {/* Overview */}
                    <div className="overview">
                        <h3>Overview</h3>
                        <p>{movie.overview}</p>
                    </div>

                    {/* Additional Info */}
                    <div className="additional-info">

                        <div>
                            <strong>Original title:</strong> {movie.original_title}
                        </div>

                        <div>
                            <strong>Language:</strong> {movie.original_language.toUpperCase()}
                        </div>

                        <div>
                            <strong>Status:</strong> {movie.status}
                        </div>

                        <div>
                            <strong>Budget:</strong> ${movie.budget.toLocaleString()}
                        </div>

                        <div>
                            <strong>Revenue:</strong> ${movie.revenue.toLocaleString()}
                        </div>

                        <div>
                            <strong>Popularity:</strong> {movie.popularity}
                        </div>
                    </div>

                    {/* Production Companies */}
                    <div className="companies">
                        <h3>Production Companies</h3>
                        <ul>
                            {movie.production_companies.map((company) => (
                                <li key={company.id}>
                                    {company.name} ({company.origin_country})
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Spoken Languages */}
                    <div className="languages">
                        <h3>Spoken Languages</h3>
                        <ul>
                            {movie.spoken_languages.map((lang) => (
                                <li key={lang.iso_639_1}>
                                    {lang.english_name}
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MovieComponent;
