import React, { Component } from 'react';

class Projects extends React.Component {
    state = {
        showProjectZero: false,
        showProjectOne: false,
        showProjectTwo: false,
        showProjectThree: false,
    }

 
    // handleToggleProject = (event) => {
    //     this.setState((prevState) => {
    //         let prevState = {...this.state}
    //     })
    // }

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


render () {
    return (
        <div id="projects">
            <h1>Projects</h1>
            
            <article className="project-zero">
                <h3>Tamagotchi</h3>
                <button onClick={this.toggleProjects0Handler}>
                    {this.state.showProjectZero ? 'Hide' : 'View' } Project Description
                </button>
                <div style={{ display: this.state.showProjectZero ? 'block' : 'none' }}>
                <p>
                    This was my first coding project at General Assembly.
                    I built an in-browser interactive game where a user
                    could care for a pet until it dies of old age or neglect.
                    Project was built using HTML, CSS, JavaScript, and jQuery.
                    This project was completed over 1.5 weeks and strengthened
                    my JavaScript and jQuery skills.
                </p>
                </div>
            </article>
            <article className="project-one">
                <h3>Zanou</h3>
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
                    My role in this project was to build out the back-end and functionality. 
                    I also integrated a Rich Text Editor for journal entries.
                    I implemented Bcrypt functionality for password protection, and implemented Express Validator
                    for confirm password functionality upon sign-up.  
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
        </div>
        );
    }
}

export default Projects;