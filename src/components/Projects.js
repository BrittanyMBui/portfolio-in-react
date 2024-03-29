import React, { Component } from 'react';
import iomt from '../images/iomt.png';
import iomt2 from '../images/iomt2.png';
import zanou from '../images/zanou.png';
import tama from '../images/tama.png';
import chathomepage from '../images/chathomepage.png';
import chatroom from '../images/chatroom.png';
import smclone from '../images/smclone.png';

class Projects extends React.Component {
    state = {
        showProjectZero: false,
        showProjectOne: false,
        showProjectTwo: false,
        showProjectThree: false,
        showProjectFour: false,
        showProjectFive: false,
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

    toggleProject5Handler = (event) => {
        this.setState((prevState) => {
            return {
                showProjectFive: !prevState.showProjectFive
            }
        })
    }


render () {
    return (
        <div id="projects">
            <h1>Projects</h1>
            
            <article className="project-zero">
                <h3><a href="https://github.com/BrittanyMBui/tamagotchi"><u>Tamagotchi</u></a></h3>
                <button onClick={this.toggleProjects0Handler}>
                    {this.state.showProjectZero ? 'Hide' : 'View' } Project Description
                </button>
                <div style={{ display: this.state.showProjectZero ? 'block' : 'none' }}>
                <p className="project-desc">
                    This was my first coding project at General Assembly.
                    I built an in browser interactive game where a user
                    could care for a pet until it dies of old age or neglect.
                    I built this project using JavaScript, jQuery, HTML, and CSS.
                    I used JavaScript and jQuery to access DOM elements and make
                    this game interactive for the user. I built a counter which started at
                    0 and triggered a new event at certain intervals. For example, every x
                    amount of seconds, a stat would increase. If certain stats reached a certain
                    integer, your pet would reach critical stats and display those stats in red, and
                    trigger a new gif to display their ailment.
                    I had a lot of fun building this one. It was an excellent introduction to the 
                    infinite possibilities of coding.
                    <img src={tama} alt="tamagotchi" className="project-photo" />
                </p>
                </div>
            </article>
            <article className="project-one">
                <h3><a href="https://zanou.herokuapp.com" target="_blank"><u>Zanou</u></a></h3>
                <button onClick={this.toggleProjects1Handler}>
                    {this.state.showProjectOne ? 'Hide' : 'View' } Project Description
                </button>
                <div style={{ display: this.state.showProjectOne ? 'block' : 'none' }}>
                <p className="project-desc">
                    This was my second coding project at General Assembly, and also my
                    first group project experience. My partner and I chose to build out a personal
                    journaling app, where a user could signup or login to a private profile and
                    create, read, edit, or delete journal entries. We built this app using JavaScript,
                    Express.js, Node.js, EJS, Mongoose, and used MongoDB for the database.
                    My role in this project was to build out the backend and functionality. I built the server
                    using Express.js and the database with Mongoose/MongoDB. I built routes and controllers
                    to allow a user to sign-up or log-in to their profile, each of which would begin a session using
                    Express Session. I also built routes and controllers for a user to be able to create a new entry,
                    edit an existing entry, view all entries, view one entry, delete an entry, or delete their accounts
                    entirely. I also built a route and controller for a user to logout of their profile and destroy
                    the session, redirecting them to the landing page.
                    I integrated a Rich Text Editor (Tiny MCE) for journal entries.
                    I implemented Bcrypt functionality for password protection, and implemented Express Validator
                    for confirm password functionality upon signup. This project was not only an incredible experience coding-wise,
                    but also because my project partner ended up becoming a great friend! We plan to release Zanou v2 very soon!
                    <br />
                    <img src={zanou} alt="zanou" className="project-photo" />
                </p>
                </div>
            </article>
            <article className="project-two">
                <h3><a href="https://github.com/BrittanyMBui/seacreaturecollector/" target="_blank"><u>Sea Creature Collector</u></a></h3>
                <button onClick={this.toggleProjects2Handler}>
                    {this.state.showProjectTwo ? 'Hide' : 'View' } Project Description
                </button>
                <div style={{ display: this.state.showProjectTwo ? 'block' : 'none' }}>
                <p className="project-desc">
                    This was my third coding project at General Assembly. The purpose of this app was simply to display
                    knowledge and skills of the Django framework. I built it without a real use case in mind but had a lot
                    of fun with building it out. In this app, a user could signup or login to a profile page. From their profile page,
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
                <h3><a href="https://github.com/BrittanyMBui/social-media-app" target="_blank"><u>SMClone</u></a></h3>
                <button onClick={this.toggleProjects3Handler}>
                    {this.state.showProjectThree ? 'Hide' : 'View' } Project Description
                </button>
                <div style={{ display: this.state.showProjectThree ? 'block' : 'none' }}>
                <p className="project-desc">
                    I built this app to learn how to use GraphQL with Apollo Server. This is a very basic social media type application where a user can login,
                    logout, add new posts, view a single post, comment on posts, view post comments, and like/unlike posts. I built this project using MongoDB,
                    Express/NodeJS, React, GraphQL, Apollo, and Semantic UI.
                    <br />
                    <img src={smclone} alt="sm-clone-screenshot" className="project-photo" />
                </p>
                </div>
            </article>
            <article className="project-four">
                <h3><a href="https://iomt-app.herokuapp.com" target="_blank"><u>Island of Misfit Techies</u></a></h3>
                <button onClick={this.toggleProject4Handler}>
                    {this.state.showProjectFour ? 'Hide' : 'View' } Project Description
                </button>
                <div style={{ display: this.state.showProjectFour ? 'block' : 'none' }}>
                <p className="project-desc">
                    This was my capstone project at General Assembly. I chose to build a space for women and underrepresented people in technology. I built this
                    project using MongoDB, Express, React, and Node. I did all of the CSS and styling from scratch.
                    This application includes a customized news feed after user login and a journal like page where
                    a user could create/view/edit/delete their own plaintext content. I integrated the TinyMCE rich text editor for the user created content. On the server side, I 
                    created a User model and Posts model to pass posts and user data from the server to React. I also implemented JWT authentication and route authorization.
                    I had a questionable amount of fun implementing auth from Express to React. I really enjoyed refactoring my routes in Express and testing new ones in Postman.
                    I used Bcryptjs to hash passwords in the database. 
                    For the news feed, I used News API and customized the endpoint query parameters to include only articles containing keywords "underrepresented and technology".
                    I am incredibly proud of this project because it greatly sharpened my React skills. I also gained a lot of experience with integrating multiple APIs into a single
                    application and RESTful API routing. I truly enjoyed building an application using MERN stack! It was extremely complex with a ton of moving parts, but that's the
                    gist of why I love programming. 
                    <br />**This project is deployed on Heroku. However, NewsAPI has a hefty paywall when using it in production, so the news feed will not
                    render after login. I am more than happy to demonstrate this app locally to anyone who may be interested.**
                    <img src={iomt} alt="iomt" className="project-photo" />
                    <br />
                    <img src={iomt2} alt="iomt" className="project-photo" />
                </p>
                </div>
            </article>
            <article className="project-five">
                <h3><a href="https://github.com/BrittanyMBui/chat-app" target="_blank"><u>Socket.io Chat App</u></a></h3>
                <button onClick={this.toggleProject5Handler}>
                    {this.state.showProjectFive ? 'Hide' : 'View' } Project Description                
                </button>
                <div style={{ display: this.state.showProjectFive ? 'block' : 'none' }}>
                <p className="project-desc">
                    This app is a very simple chat service that was built using JavaScript, React, Node, and Socket.io. 
                    A user can navigate to the homepage, type in the name of a chatroom, and enter the chatroom. Inside of the specific chatroom,
                    the user can send a message which will be received by any other participants in the chatroom. I built this quick project
                    to learn how to use Socket.io and implement real time sending and receiving of data between users.
                    <img src={chathomepage} alt="chat app homepage" className="project-photo" />
                    <br />
                    <img src={chatroom} alt="chatroom" className="project-photo" />
                </p>
                </div>
            </article>
        </div>
        );
    }
}

export default Projects;