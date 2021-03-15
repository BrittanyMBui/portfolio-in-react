import React, { Component } from 'react';

class Projects extends React.Component {
    state = {
        showProjectZero: false,
        showProjectOne: false,
        showProjectTwo: false,
        showProjectThree: false,
        showProjectFour: false,
    }

 

    toggleProjects0Handler = (event) => {
        this.setState((prevState) => {
            return {
                showProjectZero: !prevState.showProjectZero
            }
        })
    }

    toggleProjects1Handler = (event) => {
        this.setState((prevState) => {
            return {
                showProjectOne: !prevState.showProjectOne
            }
        })
    }

    toggleProjects2Handler = (event) => {
        this.setState((prevState) => {
            return {
                showProjectTwo: !prevState.showProjectTwo
            }
        })
    }

    toggleProjects3Handler = (event) => {
        this.setState((prevState) => {
            return {
                showProjectThree: !prevState.showProjectThree
            }
        })
    }

    toggleProject4Handler = (event) => {
        this.setState((prevState) => {
            return {
                showProjectFour: !prevState.showProjectFour
            }
        })
    }


render () {
    return (
        <div id="projects">
            <h1>Projects</h1>
            
            <article className="project-zero">
                <h3><a href="https://github.com/BrittanyMBui/tamagotchi">Tamagotchi</a></h3>
                <button onClick={this.toggleProjects0Handler}>
                    {this.state.showProjectZero ? 'Hide' : 'View' } Project Description
                </button>
                <div style={{ display: this.state.showProjectZero ? 'block' : 'none' }}>
                <p>
                    This was my first coding project at General Assembly.
                    I built an in-browser interactive game where a user
                    could care for a pet until it dies of old age or neglect.
                    I built this project using JavaScript, jQuery, HTML, and CSS.
                    I used JavaScript and jQuery to access DOM elements and make
                    this game interactive for the user. I built a counter which started at
                    0 and triggered a new event at certain intervals. For example, every x
                    amount of seconds, a state would increase. If certain stats reached a certain
                    integer, your pet would reach critical stats and display those stats in red, and
                    trigger a new gif to display their ailment.
                    I had a lot of fun building this one. It was an excellent introduction to the 
                    infinite possibilities of coding.
                </p>
                </div>
            </article>
            <article className="project-one">
                <h3><a href="https://zanou.herokuapp.com" target="_blank">Zanou</a></h3>
                <button onClick={this.toggleProjects1Handler}>
                    {this.state.showProjectOne ? 'Hide' : 'View' } Project Description
                </button>
                <div style={{ display: this.state.showProjectOne ? 'block' : 'none' }}>
                <p>
                    This was my second coding project at General Assembly, and also my
                    first group project experience. My partner and I chose to build out a personal
                    journaling app, where a user could sign-up or log-in to a private profile and
                    create, read, edit, or delete journal entries. We built this app using JavaScript,
                    Express.js, Node.js, EJS, Mongoose, and used MongoDB for the database.
                    My role in this project was to build out the back-end and functionality. I built the server
                    using Express.js and the database with Mongoose/MongoDB. I built routes and controllers
                    to allow a user to sign-up or log-in to their profile, each of which would begin a session using
                    Express Session. I also built routes and controllers for a user to be able to create a new entry,
                    edit an existing entry, view all entries, view one entry, delete an entry, or delete their accounts
                    entirely. I also built a route and controller for a user to log-out of their profile and destroy
                    the session, redirecting them to the landing page.
                    I integrated a Rich Text Editor (Tiny MCE) for journal entries.
                    I implemented Bcrypt functionality for password protection, and implemented Express Validator
                    for confirm password functionality upon sign-up. I was and still am incredibly proud of this project!
                </p>
                </div>
            </article>
            <article className="project-two">
                <h3>Sea Creature Collector</h3>
                <button onClick={this.toggleProjects2Handler}>
                    {this.state.showProjectTwo ? 'Hide' : 'View' } Project Description
                </button>
                <div style={{ display: this.state.showProjectTwo ? 'block' : 'none' }}>
                <p>
                    This was my third coding project at General Assembly. The purpose of this app was simply to display
                    knowledge and skills of the Django framework. I built it without a real-world use-case in mind but had a lot
                    of fun with building it out. In this app, a user could sign-up or log-in to a profile page. From their profile page,
                    they could add some information about a sea creature including name, species, and description. I integrated AWS S3 to
                    add a photo upload feature as well. I also added a feature where the user could 'feed' their sea creature from a list of
                    'meals' and choose whether it was breakfast, lunch, or dinner. Each 'feeding' would display in a form on the creature's page.
                    I added conditional logic to display a message to the user if their creature had not been fed, or whether the creature had
                    been fed all meals for the day. I built this project using Django, Materialize CSS, CSS, HTML, and used PostgreSQL as
                    the database.
                </p>
                </div>
            </article>
            <article className="project-three">
                <h3>inCheck</h3>
                <button onClick={this.toggleProjects3Handler}>
                    {this.state.showProjectThree ? 'Hide' : 'View' } Project Description
                </button>
                <div style={{ display: this.state.showProjectThree ? 'block' : 'none' }}>
                <p>
                    This was a project I chose to build in my free-time after finishing the Django curriculum at General Assembly.
                    I decided to take the skills I learned and apply them to an app that would have a real-world use-case.
                    This is a very simple and user friendly to-do list. In this app, a user could sign-up or log-in to their profile page. 
                    From their profile page, they could view the titles and dates of each to-do task. Clicking on a task would bring the user
                    to a detailed view page of the to-do task. From there, they can edit or delete the task as well.
                    From the profile page, the user can also add a new to-do task. I built this project using Python, Django, CSS, and PostgreSQL
                    as the database.
                </p>
                </div>
            </article>
            <article className="project-four">
                <h3><a href="https://iomt-app.herokuapp.com" target="_blank">Island of Misfit Techies</a></h3>
                <button onClick={this.toggleProject4Handler}>
                    {this.state.showProjectFour ? 'Hide' : 'View' } Project Description
                </button>
                <div style={{ display: this.state.showProjectFour ? 'block' : 'none' }}>
                <p>
                    This was my capstone project at General Assembly. I chose to build a space for women and underrepresented people in technology. I built this
                    project using MongoDB, Express, React, and Node. I did all of the CSS and styling from scratch.
                    This application includes a customized news feed after user login and a journal-like page where
                    a user could create/view/edit/delete their own plaintext content. I integreated the TinyMCE rich text editor for the user created content. On the server-side, I 
                    created a User model and Posts model to pass posts and user data from the server to React. I also implemented JWT authentication and route authorization.
                    I had a questionable amount of fun implementing auth from Express to React. I really enjoyed refactoring my routes in Express and testing new ones in Postman.
                    I used Bcryptjs to hash passwords in the database. 
                    For the news feed, I used News API and customized the endpoint query parameters to include only articles containing keywords "underrepresented and technology".
                    I am incredibly proud of this project because it greatly sharpened my React skills. I also gained a lot of experience with integrating multiple APIs into a single
                    application and RESTful API routing. I truly enjoyed building an application using MERN stack! It was extremely complex with a ton of moving parts, but that's the
                    gist of why I love programming.
                </p>
                </div>
            </article>
        </div>
        );
    }
}

export default Projects;