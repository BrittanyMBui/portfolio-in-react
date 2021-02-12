import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Home from './Home';
import React, { Component } from 'react';

class NavBar extends Component {
render () {



    return (
        <div>
            <nav>
                <ul>
                    <li><a href=""><Home /></a></li>
                    <li><a href=""><About /></a></li>
                    <li><a href=""><Projects /></a></li>
                    <li><a href=""><Contact /></a></li>
                </ul>
            </nav>
        </div>
    );
    }
}

export default NavBar;