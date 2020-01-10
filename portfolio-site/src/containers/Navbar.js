import React from "react"
import { Link } from 'react-router-dom'

class Navbar extends React.Component {

    render(){
        return (
            <React.Fragment >
            <nav id="my-nav-bar" class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">{'< Sergio />'}</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0"></ul> {/* Bootstrap needs this tag to right align my other navbar links for some reason */}

                    <ul class="navbar-nav my-2 my-lg-0">
                        <li class="nav-item">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>

                        <li class="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>

                        <li class="nav-item">
                            {/*eslint-disable-next-line */ }
                            <a className="nav-link" target="_blank" href="https://drive.google.com/file/d/1UOFUXCLAaxE_xoJfaOSNXKeDDOr8tTH0/view?usp=sharing">Resume</a>
                        </li>
                    </ul>
                </div>
            </nav>
            </React.Fragment>
        )
    }
}

export default Navbar