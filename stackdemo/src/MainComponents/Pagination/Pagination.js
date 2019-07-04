import React from 'react';

const SeeMoreButtonStyles = {
    backgroundColor: 'blue', /*Continue styling here or make classname in css file for more styling options*/
}

const SeeMoreButton = (props) => {
    return (
        <div>
            <button style={SeeMoreButtonStyles}>Load More...</button>
        </div>
    )
}

export default SeeMoreButton;