import React, {useEffect, useState} from "react"
import MovieCard from "./MovieCard";
import {useDispatch, useSelector} from "react-redux";
import Pagination from "./Pagination";
import {removeMovieAction, toggleLikeMovieAction} from "../../redux/actions";
import {getMovies} from "../../services/movies.service";
import Categories from "./Categories";
import Loader from "../atoms/Loader";

const MoviesList = (props) => {
    const {pending, moviesRes, error} = useSelector(state => state.moviesData);
    const [resultsPerPage, setResultsPerPage] = useState('4')
    const pageId = props.match.params.id
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMovies())
    }, [dispatch]);

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

    if (pending) {
        return <Loader/>
    }

    if (error) {
        return (
            <div className="error">
                <span>Error Loading content</span>
            </div>
        )
    }

    const moviesToShow = moviesRes.filter(e => e.toShow)

    return (
        <>
            <div>
                <Categories moviesRes={moviesRes}/>
            </div>
            <div className="movies__list">
                {moviesToShow.map((movie, i) => (
                    movieCardsShow(movie, i) &&
                    <MovieCard key={movie.id} movie={movie}
                               handleRemove={() => handleRemove(movie.id)}
                               handleToggleLike={() => handleToggleLike(movie.id)}/>
                ))}
            </div>
            <Pagination count={moviesToShow.length} pageId={pageId}
                        handleChangeResultsLimit={handleChangeResultsLimit}
                        resultsPerPage={resultsPerPage}
                        history={props.history}
            />
        </>
    )
}

export default MoviesList
