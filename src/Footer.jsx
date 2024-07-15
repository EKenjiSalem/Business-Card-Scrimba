import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons'; 

function Footer() {
    return (
        <div className="footer">
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faPinterest} />
            <FontAwesomeIcon icon={faXTwitter} />
        </div>
    );
}

export default Footer;


