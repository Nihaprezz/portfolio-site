import React from "react"
import { Link } from 'react-router-dom'

class HomePage extends React.Component {

    render (){
        return (
            <div>
                <div>
                    <h1>Hi, my name is <span>Sergio Perez</span></h1>
                    <h2>I am a Fullstack Web Developer.</h2>
                    <button><Link to="/projects">Projects</Link></button>
                </div>
            </div>
        )
    }
}

export default HomePage