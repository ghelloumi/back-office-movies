import {ACTIONS} from "../constants";
import {combineReducers} from "redux";

const initialMoviesModState = {
    pending: false,
    moviesRes: [],
    error: null
}

const moviesData = (state = initialMoviesModState, action) => {
    switch (action.type) {
        case ACTIONS.FETCH_MOVIES_PENDING:
            return {
                ...state,
                pending: true
            }
        case ACTIONS.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                pending: false,
                moviesRes: action.moviesRes
            }
        case ACTIONS.FETCH_MOVIES_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case ACTIONS.REMOVE_MOVIE_ACTION:
            return {
                ...state,
                moviesRes: state.moviesRes.filter(e => e.id !== action.id)
            }
        case ACTIONS.TOGGLE_LIKE_MOVIE_ACTION:
            const movie = state.moviesRes.find(e => e.id === action.id)
            return {
                ...state,
                moviesRes: state.moviesRes.map(e => e.id !== action.id ? e : {
                    ...e,
                    liked: !movie.liked,
                    likes: e.likes + (movie.liked ? -1 : 1),
                    dislikes: e.dislikes + (movie.liked ? 1 : e.dislikes === 0 ? 0 : -1)
                })
            }
        case ACTIONS.UPDATE_CATEGORY_TO_SHOW_ACTION:
            return {
                ...state,
                moviesRes: state.moviesRes.map(e => action.categories.includes(e.category) ? {
                    ...e,
                    toShow: true
                } : {...e, toShow: false})
            }
        default:
            return state;
    }
}

const reducers = combineReducers({
    moviesData
})

export default reducers
