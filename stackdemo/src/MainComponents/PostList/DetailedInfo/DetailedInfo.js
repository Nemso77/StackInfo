import React, { Component } from 'react';
import axios from 'axios';
import DetailedInfoDumb from './DetailedInfoDumb';

class DetailedInfo extends Component {

    state = {
        posts: []
    }

    async componentDidMount () {
        await axios.get("https://api.myjson.com/bins/1amkc3")
        .then(response => {
            this.setState({posts: response.data.map(post => {
                return post
            }).slice(0, 10)/*quantity of post that comes from dummy backend, after real backend this will be replaced by pagination and we will get all data from server without slice */
        })
        })
    }

    render () {
        const post = this.state.posts.map(singlePost => {
            return <DetailedInfoDumb
                title={singlePost.title}
                author={singlePost.author}
                date={singlePost.date}
                tags={singlePost.tags.map(singleTag => ' #' + singleTag).join(', ') 
                }
            />
        })
        return (
            <div>
                {post}
            </div>
        )
    }
}

export default DetailedInfo;