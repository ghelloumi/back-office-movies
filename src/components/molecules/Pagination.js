import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {maxResultsPerPageValues} from "../../constants";

const Pagination = ({count, pageId, handleChangeResultsLimit, resultsPerPage}) => {
    let pages = 0;

    if (count !== 0) {
        pages = Math.ceil(count / resultsPerPage);
    }

    const handleResultsPerPageChange = (e) => {
        handleChangeResultsLimit(e.currentTarget.value)
    }

    return (
        <>
            <div className="pagination">
                {parseInt(pageId, 10) !== 1 && <>
                    <Link to='/page/1'>
                        <div>First</div>
                    </Link>
                    <Link to={`/page/${parseInt(pageId, 10) - 1}`}>
                        <div>Prev</div>
                    </Link>
                </>}

                <div>{parseInt(pageId, 10)}</div>

                {parseInt(pageId, 10) !== pages && <>
                    <Link to={`/page/${parseInt(pageId, 10) + 1}`}>
                        <div>Next</div>
                    </Link>
                    <Link to={`/page/${pages}`}>
                        <div>Last</div>
                    </Link>
                </>}
            </div>
            <div className="pagination__limits">
                {maxResultsPerPageValues.map(e => (
                    <React.Fragment key={e}>
                        <input type="radio" name="setPagesLimit"
                               value={e}
                               checked={resultsPerPage === e}
                               onChange={handleResultsPerPageChange}/>
                        <span>{e}</span>
                    </React.Fragment>
                ))}
            </div>

        </>
    );
}

export default Pagination
