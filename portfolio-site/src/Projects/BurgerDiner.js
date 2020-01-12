import React from "react"

class BurgerDiner extends React.Component {

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
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src={require('../pictures/BurgerDiner/BD1.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Home Page</h5>
                                <p>This page renders the name of the site and the option to look at directions before starting the game.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={require('../pictures/BurgerDiner/BD2.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>How To Play Page</h5>
                                <p>Lets the user know how to play the game. Also gives a ingredient legend of the icons that will be rendered once the game starts.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={require('../pictures/BurgerDiner/BD3.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Game Page</h5>
                                <p>Shows the game level, the timer, the burger recipe, plate section, ingredients, and checklist of ingredients picked.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={require('../pictures/BurgerDiner/BD4.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Winning or Losing Screen</h5>
                                <p>Page changes depending if user passed the level. Lets the user go to the next level or go back home.</p>
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
                    <h1>Burger Diner</h1>
                    <h3>JavaScript | Ruby on Rails | Semantic UI</h3>
                    <h5>Burger making game, where the user is shown a recipe and is to build out the burger within a given time.</h5>
                    <div>Designed and constructed the Front-End UI using custom CSS, keyframes and Semantic UI styling.
                        Used a SQLite3 database and developed a Ruby on Rails API backend complete with serialization to get recipe data.
                        Manipulated the DOM through pure JavaScript. Optimized code to account for all game levels and any new levels being added later on.
                    </div>
                    <div className="project-links">
                        <button>
                            {/* eslint-disable-next-line */}
                            <a target="_blank" href="https://www.youtube.com/channel/UCi4RkIqq5VP84afKx4qtBkA?view_as=subscriber">
                            View Demo <i class="fab fa-youtube"></i>
                            </a>
                        </button> 
                        <button>
                            {/* eslint-disable-next-line */}
                            <a target="_blank" href="https://github.com/Nihaprezz/burgerdiner-front-end">
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

export default BurgerDiner