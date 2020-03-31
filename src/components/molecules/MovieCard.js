import React from 'react'
import Image from "../atoms/Image";
import {Images} from "../../constants";

const MovieCard = ({movie}) => {
    const {title, category, likes, dislikes} = movie
    return (
        <div className="movie__card">
            <Image src={Images.close} alt="close film"/>
            <span>{title}</span>
            <span>{category}</span>
            <div className="movie__audience">
                <span>{likes}</span>
                <Image src={Images.likeToggle} alt="like/dislike film" opacity={0.7}/>
                <span>{dislikes}</span>
            </div>
        </div>
    )
}

export default MovieCard
