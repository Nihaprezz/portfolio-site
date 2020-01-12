import React from "react"

class MovieHangout extends React.Component {

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
                            <img src={require('../pictures/MovieHangout/MovieH1.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Home Page</h5>
                                <p>This page renders the name of the site, featured movies, and popular movies from The Movie DB API.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={require('../pictures/MovieHangout/MovieH2.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Search Movies Page</h5>
                                <p>This movie page lets the user search for movies by genre, movie title, and option to sort by rating or name.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={require('../pictures/MovieHangout/MovieH3.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Movie Show Page</h5>
                                <p>Movie details and user can add reviews.</p>
                            </div>
                            </div>
                            <div class="carousel-item">
                            <img src={require('../pictures/MovieHangout/MovieH4.png')} class="d-block w-100" alt="..."/>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>User Profile Page</h5>
                                <p>Once logged in the user can visit thier profile page. Shows their details, saved movies and comments the user left on movies.</p>
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
                    <h1>Movie Hangout</h1>
                    <h3>React | Ruby on Rails | Semantic UI | The Movie DB API</h3>
                    <h5>Movie site where users can search for movies or browse by genre/ratings, users can like movies and review them.</h5>
                    <div>Designed and constructed the Front-End UI using React with custom CSS and Semantic UI styling.
                        Used a PostgreSQL database and developed a RESTful Rails API backend with endpoints for users, movies, liked movies and comments.
                        Implemented React Router creating a multi-page user interface for a more intuitive user experience.
                        Built full authentication structure with JWT for app security. Storing encrypted user information by using localStorage.
                        Integrated The Movie DB API to show featured movies and live ratings.
                    </div>
                    <div className="project-links">
                        <button>
                            {/* eslint-disable-next-line */}
                            <a target="_blank" href="https://youtu.be/iSQBKPTajK4">
                            View Demo <i class="fab fa-youtube"></i>
                            </a>
                        </button> 
                        <button>
                            {/* eslint-disable-next-line */}
                            <a target="_blank" href="https://github.com/Nihaprezz/movie-hangout-backend">
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

export default MovieHangout