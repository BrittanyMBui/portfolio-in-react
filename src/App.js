import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

class App extends React.Component {


  render () {
    return (
      <div>
        <NavBar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
