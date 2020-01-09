import React from 'react'
import "../styles/projects_page.scss"

class ProjectsPage extends React.Component {

    render(){
        return (
            <div className="projects-page">
                <div className="project-card">
                    <p>The Game Couch</p>
                    <div className="gc-img project-img"></div>
                </div>

                <div className="project-card">
                    <p>Movie Hangout</p>
                    <div className="mh-img project-img"></div>
                </div>

                <div className="project-card">
                    <p>BrewQueue</p>
                    <div className="bq-img project-img"></div>
                </div>

                <div className="project-card">
                    <p>Burger Diner</p>
                    <div className="bd-img project-img"></div>
                </div>
            </div>
        )
    }
}

export default ProjectsPage