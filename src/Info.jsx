import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import img from './images/rsz_business-card-img.jpg';
import About from './About';
import Interest from './Interest';
import Footer from './Footer';

function Info() {
    return (
        <div className="card-container">
            <img src={img} alt="Business Card Background" className="card-image" />
            <div className="card">
                <h1>Elias K. Salem</h1>
                <h2>Front-End Developer</h2>
                <h3>www.townstatedigital.com</h3>
                <button><FontAwesomeIcon icon={faEnvelope} /> Email</button>
                <About />
                <Interest />
                <Footer /> 
            </div>
        </div>
    );
}

export default Info;

