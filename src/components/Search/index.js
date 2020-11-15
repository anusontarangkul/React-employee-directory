import React, { useRef } from 'react';
import "./style.css";

function Search({ handleChange }) {
    const inputRef = useRef();
    return (
        <form className="search">
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Search"
                    ref={inputRef}
                    onChange={() => handleChange(inputRef.current.value)}


                />
            </div>
        </form>
    )
}



export default Search;