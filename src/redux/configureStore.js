import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'
import reducers from "./reducers";
import {movies} from '../services/movies'

const logger = createLogger({
    predicate: () => process.env.NODE_ENV === 'development'
});

const getMoviesInitialList = (movies) => {
    return {
        moviesList: movies.map(e => ({
            id: e.id,
            title: e.title,
            category: e.category,
            likes: e.likes,
            dislikes: e.dislikes,
            liked: false,
            toShow: true
        })),
    }
}

export default function configureStore(preloadedStore = getMoviesInitialList(movies)) {
    return createStore(
        reducers,
        preloadedStore,
        applyMiddleware(thunk, logger),
    )
}
