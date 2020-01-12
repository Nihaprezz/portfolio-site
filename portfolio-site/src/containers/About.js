import React from 'react'
import "../styles/about_page.scss"

class About extends React.Component {
    render(){
        return (
            <div className="about-page">
                <div className="about-container">
                    <h1 className="animated slideInLeft">Sergio Perez</h1>
                    <h4 className="animated slideInLeft">Sergio is a <span>Software Engineer/Full Stack Web Developer </span> with a background in the IT industry, proficient in Ruby, Ruby on Rails, JavaScript, and React/Redux. He loves to create and has a passion for bringing ideas to life. Previously this was done through drawings/paintings but this has transitioned beautifully into coding applications. With the debugging and troubleshooting experience provided from the IT industry he has developed a love for problem solving.</h4>
                    <div className="technical-skills animated slideInRight">
                        <h2>Technical Skills</h2>
                        <div>
                            <h5>Ruby, Ruby on Rails, Javascript, React, Redux, Sinatra, HTML5</h5>
                            <h5>SQLite, PostgreSQL, Git, Github, MVC, RESTful architecture, APIs</h5>
                            <h5>CSS, Keyframes, Bootstrap, Semantic UI, BULMA framework</h5>
                        </div>
                    </div>

                    <div className="about-me-contact-icons animated slideInLeft">
                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://github.com/Nihaprezz">
                            <i class="fab fa-github"></i>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://www.linkedin.com/in/sergio-perez-63928919b/">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        
                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://twitter.com/nihaprezz">
                            <i class="fab fa-twitter-square"></i>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://codepen.io/Nihaprezz">
                            <i class="fab fa-codepen"></i>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a href="mailto: sergioaprez@outlook.com">
                            <i class="fas fa-paper-plane"></i>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default About