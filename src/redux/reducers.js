import {ACTIONS} from "../constants";
import {combineReducers} from "redux";

const initialMoviesState = {
    data: []
}

const moviesList = (state = initialMoviesState, action) => {
    return state

    // switch (action.type) {
    //     case ACTIONS.ADD_POKEMON_TO_FAVLIST_ACTION:
    //         return {
    //             ...state,
    //             data: [...state.data, action.name]
    //         }
    //     case ACTIONS.REMOVE_POKEMON_TO_FAVLIST_ACTION:
    //         return {
    //             ...state,
    //             data: state.data.filter(name => name !== action.name)
    //         }
    //     default:
    //         return state;
    // }
}

const reducers = combineReducers({
    moviesList
})

export default reducers
