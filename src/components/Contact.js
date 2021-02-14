import React, { Component } from 'react';

class Contact extends Component {
    render () {
        return (
            <div className="contact">
                <h1>Contact</h1>
                <div className="email">
                    <a href="mailto:brittymbui@gmail.com"><i className="fas fa-envelope"></i></a>
                </div>
            </div>
        );
    }
}

export default Contact;