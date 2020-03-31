import React from "react"
import MovieCard from "./MovieCard";
import {useSelector} from "react-redux";
import Pagination from "./Pagination";

const MoviesList = (props) => {
    const moviesList = useSelector(state => state.moviesList);
    const pageId = props.match.params.id

    return (
        <>
            <div className="movies__list">
                {moviesList.map(movie => (
                    <MovieCard key={movie.id} movie={movie}/>
                ))}
            </div>
            <Pagination count={moviesList.length} pageId={pageId}/>
        </>
    )
}

export default MoviesList
