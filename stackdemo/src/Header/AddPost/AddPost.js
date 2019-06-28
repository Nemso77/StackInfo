import React, { Component } from 'react';
import AddPostStyle from './AddPost.css';

class AddPost extends Component {
    render () {
        return (
            <div>
                <button className="addPostButton">
                    <a className="addPostLink" href="javascript:void(0)">
                        დაწერე პოსტი
                    </a>
                </button>
            </div>
        )
    }
}

export default AddPost;