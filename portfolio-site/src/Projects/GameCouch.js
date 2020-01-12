import React from "react"

class GameCouch extends React.Component {
    
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
                            <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={require('../pictures/GameCouch/GC1.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Home Page</h5>
                                <p>This page renders the name of the site, featured games, popular games and on the footer the API used.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={require('../pictures/GameCouch/GC2.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Search Games Page</h5>
                                <p>This games page lets the user search for games by genre, popular year or by title through the search bar.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={require('../pictures/GameCouch/GC3.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Game Show Page</h5>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={require('../pictures/GameCouch/GC4.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>User Profile Page</h5>
                                <p>Once logged in the user can visit thier profile page. Shows their details, liked games and recent posts.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={require('../pictures/GameCouch/GC5.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Non-User Profile Page</h5>
                                <p>Page shows details of other users of Game Couch. Logged in users will have the option to follow them.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={require('../pictures/GameCouch/GC6.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Feed Page</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
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
                    <h1>The Game Couch</h1>
                    <h3>React | Redux | Ruby on Rails | RAWG API</h3>
                    <h5>A gaming community website where users can browse through games and connect/interact with other users.</h5>
                    <div>Frontend constructed by using React with custom CSS and minimal components from BULMA’s framework.
                        Integrated global state by using Redux for smooth page updates and better state management.
                        Fetched game information based on genre, popularity and search terms from the RAWG video game database API.
                        Implemented React Router for a multi-page interface. Incorporated full authentication using JWT tokens and Bcrypt.
                    </div>
                    <div className="project-links">
                        <button>
                            {/* eslint-disable-next-line */}
                            <a target="_blank" href="https://youtu.be/tbwp5T4BzNk">
                            View Demo <i class="fab fa-youtube"></i>
                            </a>
                        </button> 
                        <button>
                            {/* eslint-disable-next-line */}
                            <a target="_blank" href="https://github.com/Nihaprezz/game_couch_frontend">
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

export default GameCouch
