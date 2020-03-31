import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const Pagination = ({count, pageId, handleChangeResultsLimit, resultsPerPage}) => {
    let pages = 0;

    if (count !== 0) {
        pages = Math.ceil(count / resultsPerPage);
    }

    const handleResultsPerPageChange = (e) => {
        handleChangeResultsLimit(e.currentTarget.value)
    }

    console.log(resultsPerPage)

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
                <input type="radio" name="setPagesLimit"
                       value={4}
                       checked={resultsPerPage === '4'}
                       onChange={handleResultsPerPageChange}/>
                <span>4</span>
                <input type="radio" name="setPagesLimit"
                       value={8}
                       checked={resultsPerPage === '8'}
                       onChange={handleResultsPerPageChange}/>
                <span>8</span>
                <input type="radio" name="setPagesLimit"
                       value={12}
                       checked={resultsPerPage === '12'}
                       onChange={handleResultsPerPageChange}/>
                <span>12</span>
            </div>

        </>
    );
}

export default Pagination
