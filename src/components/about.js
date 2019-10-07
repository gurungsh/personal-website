import React, { Component } from 'react';
import './about.css';

class About extends Component {
    render() {
        return (
            <div className="about-container">
                <div className="personal-details">
                    <div>
                        <span className="profile-fullname">SHISHIR GURUNG</span>
                    </div>
                    <div>
                        <span className="about-details">
                            <a href="mailto: gurungsh@gmail.com" title="Email Me!" target="_blank" rel="noopener noreferrer">
                                <i class="fas fa-envelope"></i><span className="profile-email"> gurungsh@gmail.com</span></a>
                        </span>
                    </div>
                    <div>
                        <span className="about-details">
                            <a href="https://www.linkedin.com/in/gurungsh" title="Visit my LinkedIn" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i><span className="profile-linkedin"> linkedin.com/in/gurungsh</span></a>
                        </span>
                    </div>
                    <div>
                        <span className="about-details">
                            <a href="https://www.github.com/gurungsh" title="Visit my GitHub" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github-square"></i><span className="profile-github"> github.com/gurungsh</span></a>
                        </span>
                    </div>
                </div>
            </div>
        );
    };
};

export default About;