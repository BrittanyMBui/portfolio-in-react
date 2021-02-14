import React, { Component } from 'react';

class NavBar extends Component {
render () {



    return (
        <div>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="projects">Projects</a></li>
                    <li><a href="contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    );
    }
}

export default NavBar;