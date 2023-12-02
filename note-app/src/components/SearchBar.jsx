import React from "react";
import { FaSearch } from "react-icons/fa";
export default function SearchBar(props){ 
    

    return(
        <div className="search-container">
            <FaSearch className="search-icon" size="1.3em"></FaSearch>
            <input value={props.value} onChange={props.searchText} type="text" placeholder="Type to Search..."></input>
        </div>
    );
}