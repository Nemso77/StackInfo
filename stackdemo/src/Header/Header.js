import React, { Component } from 'react';
import HeaderStyle from './Header.css';
import AddPost from './AddPost/AddPost';
import Logo from './Logo/Logo';
import SearchBar from './SearchBar/SearcBar';
import Authorization from './Authorization/Authorization';

class Header extends Component {
    render() {
        return(
            <div className="HeaderFlow">
                <Logo/>
                <SearchBar/>
                <AddPost/>
                <Authorization/>
            </div>
        )
    }
}

export default Header;