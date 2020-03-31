import React, {useState} from "react"
import MovieCard from "./MovieCard";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "./Pagination";
import {removeMovieAction, toggleLikeMovieAction} from "../../redux/actions";

const MoviesList = (props) => {
    const moviesList = useSelector(state => state.moviesList);
    const [resultsPerPage, setResultsPerPage] = useState('4')
    const pageId = props.match.params.id
    const dispatch = useDispatch()

    const handleRemove = (id) => {
        dispatch(removeMovieAction(id))
    }

    const handleToggleLike = (id) => {
        dispatch(toggleLikeMovieAction(id))
    }

    const handleChangeResultsLimit = (e) => {
        setResultsPerPage(e)
    }

    const movieCardsShow = (movie, i) => movie.toShow && i >= resultsPerPage * parseInt(pageId, 10) - resultsPerPage &&
        i < resultsPerPage * parseInt(pageId, 10)

    return (
        <>
            <div className="movies__list">
                {moviesList.map((movie, i) => (
                    movieCardsShow(movie, i) &&
                    <MovieCard key={movie.id} movie={movie}
                               handleRemove={() => handleRemove(movie.id)}
                               handleToggleLike={() => handleToggleLike(movie.id)}/>
                ))}
            </div>
            <Pagination count={moviesList.length} pageId={pageId} handleChangeResultsLimit={handleChangeResultsLimit}
                        resultsPerPage={resultsPerPage}/>
        </>
    )
}

export default MoviesList
