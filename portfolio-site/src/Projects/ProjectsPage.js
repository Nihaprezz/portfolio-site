import React from 'react'
import { Link } from "react-router-dom"
import "../styles/projects_page.scss"

class ProjectsPage extends React.Component {

    render(){
        return (
            <div className="projects-page">
                <div className="project-card">
                    <p>The Game Couch</p>
                    <Link to="/projects/gamecouch"><div className="gc-img project-img"></div></Link>
                </div>

                <div className="project-card">
                    <p>Movie Hangout</p>
                    <Link to="/projects/moviehangout"><div className="mh-img project-img"></div></Link>
                </div>

                <div className="project-card">
                    <p>BrewQueue</p>
                    <Link to="/projects/brewqueue"><div className="bq-img project-img"></div></Link>
                </div>

                <div className="project-card">
                    <p>Burger Diner</p>
                    <Link to="/projects/burgerdiner"><div className="bd-img project-img"></div></Link>
                </div>
            </div>
        )
    }
}

export default ProjectsPage