import React from 'react'
import Image from "../atoms/Image";
import {Images} from "../../constants";

const MovieCard = ({movie, handleRemove, handleToggleLike}) => {
    const {title, category, likes, dislikes, liked} = movie

    return (
        <div className="movie__card">
            <Image src={Images.close} alt="close film" onClick={handleRemove}/>
            <span>{title}</span>
            <span>{category}</span>
            <div className="movie__audience">
                <span>{likes}</span>
                <Image src={Images.likeToggle} alt="like/dislike film" opacity={liked ? 0.7 : 0.3}
                       onClick={handleToggleLike}/>
                <span>{dislikes}</span>
            </div>
        </div>
    )
}

export default MovieCard
