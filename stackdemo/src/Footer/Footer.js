import React from 'react';
import FooterStyles from './Footer.css'

const Footer = (props) => {
    return (
        <div className="Footer">
            <div className="FooterLinks">
                <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer">Homepage</a>
                <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer">About Us</a>
                <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer">Contact</a>
                <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer">Terms of Service</a>
                <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer">Project Contributors</a>
                <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer">F.A.Q</a>
            </div>
            <div>
                <p>Copyright © 2019</p>
            </div>
        </div>
    )
}

export default Footer;