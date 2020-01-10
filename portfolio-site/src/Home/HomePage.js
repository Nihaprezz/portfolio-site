import React from "react"
import { Link } from 'react-router-dom'
import "../styles/home_page.scss"

class HomePage extends React.Component {

    render (){
        return (
            <div className="home-page">
                <div className="home-page-details-container">
                    <p className="intro">Hi, my name is <span>Sergio Perez</span>.</p>

                    <p className="i-am">I am a Fullstack Web Developer.</p>

                    <Link to="/projects"><button>Projects</button></Link>

                    <div className="home-icons">
                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://github.com/Nihaprezz">
                            <i class="fab fa-github"></i>
                        </a>

                        {/* eslint-disable-next-line */}
                        <a target="_blank" href="https://www.linkedin.com/in/sergio-perez-63928919b/">
                        <i class="fab fa-linkedin"></i>
                        </a>
                    </div> 
                </div>
            </div>
        )
    }
}

export default HomePage