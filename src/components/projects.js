import React, { Component } from 'react';
import './projects.css';
class Projects extends Component {
    render() {
        return (
            <div className="projects-container">
                <h1>PROJECTS</h1>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">To Do List</h5>
                                <p className="card-text">Simple to do list created in React.</p>
                            </div>
                            <div className="card-footer">
                                <a href="https://gurungsh.github.io/todolist" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Demo</a>
                                <a href="https://github.com/gurungsh/todolist" className="btn btn-repo" target="_blank" rel="noopener noreferrer">Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">RUPICS</h5>
                                <p className="card-text">React app that lets the user search for random pictures from Unsplash.com. The photographer's details are also displayed and the user can click on it to visit the photographer's Unsplash page.</p>
                            </div>
                            <div className="card-footer">
                                <a href="https://gurungsh.github.io/rupics" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Demo</a>
                                <a href="https://github.com/gurungsh/rupics" className="btn btn-repo" target="_blank" rel="noopener noreferrer">Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">Personal Website</h5>
                                <p className="card-text">This website.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#about" className="btn btn-primary">Demo</a>
                                <a href="https://github.com/gurungsh/personal-website" className="btn btn-repo" target="_blank" rel="noopener noreferrer">Repo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">React Carousel</h5>
                                <p className="card-text">Bootstrap has a Carousel component which is an image gallery slider. This project recreates a similar Carousel but in React.</p>
                            </div>
                            <div className="card-footer">
                                <a href="https://gurungsh.github.io/carousel" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Demo</a>
                                <a href="https://github.com/gurungsh/carousel" className="btn btn-repo" target="_blank" rel="noopener noreferrer">Repo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Projects;