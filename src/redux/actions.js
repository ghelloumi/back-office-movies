import {ACTIONS} from "../constants";

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

