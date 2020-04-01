import {getMoviesActions} from "../redux/actions";
import {movies$} from "./movies";

export const getMovies = () => (
    async dispatch => {
        dispatch(getMoviesActions.fetchMoviesPending());
        try {
            let res = await movies$
            res = res.map(e => ({
                id: e.id,
                title: e.title,
                category: e.category,
                likes: e.likes,
                dislikes: e.dislikes,
                liked: false,
                toShow: true
            }))
            dispatch(getMoviesActions.fetchMoviesSuccess(res))
            return res;
        } catch (e) {
            dispatch(getMoviesActions.fetchMoviesError(e));
        }
    }
)
