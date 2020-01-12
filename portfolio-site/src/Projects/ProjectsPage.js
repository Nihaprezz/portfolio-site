import React from 'react'
import { Link } from "react-router-dom"
import "../styles/projects_page.scss"

class ProjectsPage extends React.Component {

    render(){
        return (
            <div className="projects-page">
                <div className="project-card animated fadeInDown">
                    <p><Link to="/projects/gamecouch">The Game Couch</Link></p>
                    <Link to="/projects/gamecouch"><div className="gc-img project-img"></div></Link>
                </div>

                <div className="project-card animated fadeInDown">
                    <p><Link to="/projects/moviehangout">Movie Hangout</Link></p>
                    <Link to="/projects/moviehangout"><div className="mh-img project-img"></div></Link>
                </div>

                <div className="project-card animated fadeInDown">
                    <p><Link to="/projects/brewqueue">BrewQueue</Link></p>
                    <Link to="/projects/brewqueue"><div className="bq-img project-img"></div></Link>
                </div>

                <div className="project-card animated fadeInDown">
                    <p><Link to="/projects/brewqueue">Burger Diner</Link></p>
                    <Link to="/projects/burgerdiner"><div className="bd-img project-img"></div></Link>
                </div>
            </div>
        )
    }
}

export default ProjectsPage