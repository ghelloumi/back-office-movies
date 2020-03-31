import React from "react"

const Categories = () => {
    return (
        <div className="categories">
            <span>
                Category:
            </span>
            <select id="genres" multiple>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
        </div>
    )
}

export default Categories
