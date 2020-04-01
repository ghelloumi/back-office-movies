import logo from "./assets/logo.png"
import imageNotFound from "./assets/imageNotFound.png"
import like from "./assets/like.png"
import dislike from "./assets/dislike.png"
import close from "./assets/close.jpg"
import likeToggle from "./assets/likeToggle.png"
import loader from "./assets/loader.gif"

export const Images = {
    logo, imageNotFound, dislike, like, close, likeToggle, loader
}

export const Texts = {
    APP_TITLE: "Movies App"
}

export const ACTIONS = {
    REMOVE_MOVIE_ACTION: 'REMOVE_MOVIE_ACTION',
    TOGGLE_LIKE_MOVIE_ACTION: 'TOGGLE_LIKE_MOVIE_ACTION',
    UPDATE_CATEGORY_TO_SHOW_ACTION: 'UPDATE_CATEGORY_TO_SHOW_ACTION',
    FETCH_MOVIES_PENDING: 'FETCH_MOVIES_PENDING',
    FETCH_MOVIES_SUCCESS: 'FETCH_MOVIES_SUCCESS',
    FETCH_MOVIES_ERROR: 'FETCH_MOVIES_ERROR',
}

export const maxResultsPerPageValues = ['4', '8', '12']
