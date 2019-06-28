import React, { Component } from 'react';
import SearchBarStyle from './SearchBar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <form className="searchBarForm" action="search-results" method="GET">
                    <FontAwesomeIcon icon={faSearch} className="searchBarButton" />
                    <input className="searchBarInput" type="text"/>
                </form>
            </div>
        )
    }
}

export default SearchBar;