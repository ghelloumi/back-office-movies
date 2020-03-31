import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger'
import reducers from "./reducers";
import {movies} from '../movies'

const logger = createLogger({
    predicate: () => process.env.NODE_ENV === 'development'
});

export default function configureStore(preloadedStore = {moviesList: movies}) {
    return createStore(
        reducers,
        preloadedStore,
        applyMiddleware(thunk, logger),
    )
}
