import React from 'react';
import DetailedInfoDumbStyle from './DetailedInfoDumb.css'

const DetailedInfoDumb = (props) => {
    return (
        <div className="DetailedInfoDumb"> 
            <a className="DetailedInfoDumb__Title" href="javascript:void(0)">{props.title}</a>
            <p className="DetailedInfoDumb__Author">ავტორი: {props.author}</p>
            <p className="DetailedInfoDumb__Date">თარიღი: {props.date}</p>
            <p className="DetailedInfoDumb__Tags"> თეგები:
                <a className="DetailedInfoDumb__Tags__Links" href="javascript:void(0)">{props.tags}</a>
            </p>
        </div>
    )
}

export default DetailedInfoDumb;