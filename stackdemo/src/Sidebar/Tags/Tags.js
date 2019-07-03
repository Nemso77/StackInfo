import React, { Component } from 'react';
import { link } from 'fs';
import TagGeneralStyles from './Tags.css'

class Tags extends Component {

    state = {
        tagsWithStyles: [
            {
                tagText: "html",
                tagStyle: {color: '#F26525'}
            },
            {
                tagText: "css",
                tagStyle: {color: '#1B73BA'}
            },
            {
                tagText: "javascript",
                tagStyle: {color: '#F0DC4E'}
            },
            {
                tagText: "react",
                tagStyle: {color: '#61DAFB'}
            },
            {
                tagText: "angular",
                tagStyle: {color: '#C3002F'}
            },
            {
                tagText: "vue",
                tagStyle: {color: '#41B883'}
            },
            {
                tagText: "ajax",
                tagStyle: {color: '#044978'}
            },
            {
                tagText: "jQuery",
                tagStyle: {color: '#83BEEC'}
            },
            {
                tagText: "node",
                tagStyle: {color: '#026E00'}
            },
            {
                tagText: "express",
                tagStyle: {color: '#EEEEEE'}
            }
        ]
    }

    render() {
        return (
            <div>
                {
                    this.state.tagsWithStyles.map(singleTag => {
                        return (
                            <a 
                                className="TagGeneralStyles"
                                style={singleTag.tagStyle} 
                                href="javascript:void(0)">
                                {singleTag.tagText}
                            </a>
                        )
                    })
                }
            </div>
        )
    }
}

export default Tags;