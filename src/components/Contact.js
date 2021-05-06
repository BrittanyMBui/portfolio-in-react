const Contact = () => {

    return (
        <div id="contact">
            <h1>Let's Connect!</h1>
            <div className="contact">
                <div className="contact-item">
                    <a href="mailto:brittymbui@gmail.com"><i className="fas fa-envelope icon"></i></a>
                </div>
                <div className="contact-item">
                    <a href="https://www.github.com/BrittanyMBui" target="_blank"><i className="fab fa-github-square icon"></i></a>
                    </div>
                <div className="contact-item">
                <a href="https://www.linkedin.com/in/brittanymbui/" target="_blank"><i className="fab fa-linkedin icon"></i></a>
                </div>
                <div className="contact-item">
                <a href="https://twitter.com/realconfused_b" target="_blank"><i className="fab fa-twitter-square icon"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Contact;