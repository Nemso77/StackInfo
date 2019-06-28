import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import AuthorizationStyle from './Authorization.css'

class Authorization extends Component{
    render() {
        return (
            <div>
                <a href="javascript:void(0)">
                    <FontAwesomeIcon icon={faUserAlt} className="AuthorizationIcon"/>
                </a>
            </div>
        )
    }
}

export default Authorization;