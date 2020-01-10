import React from 'react'

class About extends React.Component {
    render(){
        return (
            <div className="about-page">
                <div className="about-container">
                    <h1>Sergio Perez</h1>
                    <h4>Sergio is a Software Engineer/Full Stack Web Developer with a background in the IT industry, proficient in Ruby, Ruby on Rails, JavaScript, and React/Redux. He loves to create and has a passion for bringing ideas to life. Previously this was done through drawings/paintings but this has transitioned beautifully into coding applications.With the debugging and troubleshooting experience provided from the IT industry he has developed a love for problem solving.</h4>
                    <div>
                        <h2>Technical Skills</h2>
                        <div>
                            <h5>Ruby, Ruby on Rails, Javascript, React, Redux, Sinatra, HTML5</h5>
                            <h5>SQLite, PostgreSQL, Git, Github, MVC, RESTful architecture, APIs</h5>
                            <h5>CSS, Keyframes, Bootstrap, Semantic UI, BULMA framework</h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About