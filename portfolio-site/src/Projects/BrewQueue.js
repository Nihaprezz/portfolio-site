import React from "react"
import "../styles/project_show_page.scss"

class BrewQueue extends React.Component {
    
    goBack = () => {
        window.history.back();
    }

    render(){
        return (
            <div className="project-show-page">
                <div className="project-screenshots container animated flipInX">
                    <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                            <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={require('../pictures/BrewQueue/BrewQ1.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Home Page</h5>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={require('../pictures/BrewQueue/BrewQ2.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Search Functionality</h5>
                                <p>From the home page a user can search a city and breweries will be rendered from the API.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={require('../pictures/BrewQueue/BrewQ3.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Brewery Show Page</h5>
                                <p>Details of the brewery. Users are able to add reviews through this page and add the brewery to their queue.</p>
                            </div>
                            </div>

                            <div class="carousel-item">
                            <img src={require('../pictures/BrewQueue/BrewQ4.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>User Profile Page</h5>
                                <p>Once logged in the user can visit thier profile page. Shows their details, comments the user has made on breweries and their "brewqueue".</p>
                            </div>
                            </div>

                            <div class="carousel-item">
                            <img src={require('../pictures/BrewQueue/BrewQ5.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Login Page</h5>
                            </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>

                <div className="project-details container animated flipInX">
                    <h1>BrewQueue</h1>
                    <h3>Ruby on Rails | Bootstrap | Open Brewery DB API</h3>
                    <h5> A ruby on rails application for finding breweries in your area. Allowing you to review them and add them to your queue. </h5>
                    <div>Designed and styled site using Bootstrap 4 along with customized CSS styles/animations. 
                        Integrated Open Brewery DB API to locate breweries in the area the user searched.
                        Implemented full CRUD functionality for a user to be able to create, edit, and destroy their reviews.
                        Incorporated user authentication by using bcrypt gems and persisting user sessions using cookies.
                    </div>
                    <div className="project-links">
                        <button>
                            {/* eslint-disable-next-line */}
                            <a target="_blank" href="https://youtu.be/qxlLTEEbWWc">
                            View Demo <i class="fab fa-youtube"></i>
                            </a>
                        </button> 
                        <button>
                            {/* eslint-disable-next-line */}
                            <a target="_blank" href="https://github.com/Nihaprezz/brewPilgrim">
                            Github <i class="fab fa-github"></i>
                            </a>
                        </button>
                        <button onClick={this.goBack}>Back <i class="fas fa-backward"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default BrewQueue