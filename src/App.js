import React, { Component } from 'react';
import './App.css';

import Navigation from './components/navigation';
import About from './components/about';
import Resume from './components/resume';
import Projects from './components/projects';

class App extends Component {
  render() {
    return (
      <div className="App">
        <span id="about">
          <About></About>
        </span>
        <Navigation></Navigation>
        <span id="resume">
          <Resume></Resume>
        </span>
        <span id="projects">
          <Projects></Projects>
        </span>
      </div>
    );
  };
};

export default App;
