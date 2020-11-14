import React from 'react';
import "./style.css";

function Search(props) {
    return (
        <form className="search">
            <div className="form-group">
                <input
                    value={props.search}
                    onChange={props.handleInputChange}
                    name="term"
                    list="term"
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    id="term"
                />
            </div>
        </form>
    )
}

export default Search;