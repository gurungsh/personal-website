import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <span className="navbar-brand" >Shishir Gurung</span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-item nav-link" href="#about">About</a>
                        <a className="nav-item nav-link" href="#resume">Resume</a>
                        <a className="nav-item nav-link" href="#projects">Projects</a>
                    </div>
                </div>
            </nav>
        );
    };
}

export default Navigation;