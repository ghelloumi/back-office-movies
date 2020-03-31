import {ACTIONS} from "../constants";
import {combineReducers} from "redux";

const initialMoviesState = []

const moviesList = (state = initialMoviesState, action) => {
    switch (action.type) {
        case ACTIONS.REMOVE_MOVIE_ACTION:
            return state.filter(e => e.id !== action.id)
        case ACTIONS.TOGGLE_LIKE_MOVIE_ACTION:
            const movie = state.find(e => e.id === action.id)
            return state.map(e => e.id !== action.id ? e : {
                ...e,
                liked: !movie.liked,
                likes: e.likes + (movie.liked ? -1 : 1),
                dislikes: e.dislikes + (movie.liked ? 1 : movie.liked !== 0 ? -1 : 0)
            })
        case ACTIONS.UPDATE_CATEGORY_TO_SHOW_ACTION:
            return state.map(e => action.categories.includes(e.category) ? {...e, toShow: true} : {...e, toShow: false})
        default:
            return state;
    }
}

const reducers = combineReducers({
    moviesList
})

export default reducers
