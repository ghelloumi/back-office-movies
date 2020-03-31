import React from 'react';
import {Link} from 'react-router-dom';

const Pagination = ({count, pageId}) => {
    let pages = 0;
    const resultsPerPage = 4

    if (count !== 0) {
        pages = Math.ceil(count / resultsPerPage);
    }

    return (
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
    );
}

export default Pagination
