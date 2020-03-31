import React from 'react';
import {Images} from "../../constants";

const Image = ({src, alt, onClick, opacity}) => {
    const onError = (e) => {
        e.target.src = Images.imageNotFound
    }

    return (
        <img src={src} alt={alt} onError={onError} onClick={onClick} style={opacity ? {opacity} : {}}/>
    );
}

export default Image;
