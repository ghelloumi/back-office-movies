import React, {useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {updateCategoriesToShowAction} from "../../redux/actions";

const Categories = () => {
    const moviesList = useSelector(state => state.moviesList);
    const categoriesList = [...new Set(moviesList.map(e => e.category))].map((e, i) => ({id: i, category: e}))
    const dispatch = useDispatch()

    const handleChangeCategorySelection = (e) => {
        const selected = Array.from(e.target.options).filter(e => e.selected).map(e => e.value)
        dispatch(updateCategoriesToShowAction(selected))
    }

    return (
        <div className="categories">
            <span>
                Category:
            </span>
            <select id="genres" multiple onChange={handleChangeCategorySelection}>
                {categoriesList.map(e => (
                    <option key={e.id} value={e.category}>{e.category}</option>
                ))}
            </select>
        </div>
    )
}

export default Categories
