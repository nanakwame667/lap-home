import React from 'react';

import './Search.css';
function Search(props) {
    return (
            <div className="product-search">
                    <input type="text" className="search"/>
                    <div className="search-btn" type="button">
                        <span>Search</span>
                    </div>
            </div>
    );
}

export default Search;