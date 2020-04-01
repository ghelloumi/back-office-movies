import {ACTIONS} from "../constants";

// get movies Actions
export const getMoviesActions = {
    fetchMoviesPending: () => {
        return {
            type: ACTIONS.FETCH_MOVIES_PENDING
        }
    },
    fetchMoviesSuccess: (moviesRes) => {
        return {
            type: ACTIONS.FETCH_MOVIES_SUCCESS,
            moviesRes
        }
    },
    fetchMoviesError: (error) => {
        return {
            type: ACTIONS.FETCH_MOVIES_ERROR,
            error
        }
    }
}

export const removeMovieAction = (id) => {
    return {
        type: ACTIONS.REMOVE_MOVIE_ACTION,
        id
    }
}

export const toggleLikeMovieAction = (id) => {
    return {
        type: ACTIONS.TOGGLE_LIKE_MOVIE_ACTION,
        id
    }
}

export const updateCategoriesToShowAction = (categories) => {
    return {
        type: ACTIONS.UPDATE_CATEGORY_TO_SHOW_ACTION,
        categories
    }
}
