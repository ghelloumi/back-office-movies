import React from 'react'
import Categories from "../molecules/Categories";
import Routes from "../../Routes";

const Movies = () => {
    return (
        <div className="movies">
            <div>
                <Categories/>
            </div>
            <div>
                <Routes/>
            </div>
        </div>
    )
}

export default Movies
