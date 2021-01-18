import React, { Component } from "react";
import GitHubIcon from '@material-ui/icons/GitHub';

import { one, two, three, four, five} from './../Files/MovieDatabase/ShowMovieDatabase';
import './../Components/Projects.css';

class MovieDatabase extends Component {
    constructor() {
        super();
        this.state = {
            name: "React"
        };
    }

    render() {
        return (
            <div className="ProjectInfo">
                <div className="MovieDatabase">
                    <p>
                        This was a term long group project that was done during the fall 2020 semester for my intro to web development class. It was a great experience that
                        taught me about maintaining healthy group dynamics and managing the workload to meet deadlines. The website's server code uses Node.js and all client resources required by the website are served by said server
                        The site also applies RESTful API design very well which will be talked about later.
                    </p>
                    <p>The project was to create a web application similar to imdb and supported the following features:</p>

                    <p style={{ fontWeight: "900", color: "#2DCCC7", fontSize: "large" }}>Users</p>
                    <p>The website allows users to create new accounts by specifying a username and password. Usernames must be unique. The user is then able to log in and out of the system using their username and password.
                    Within a single browser instance, only a single user should be able to be logged in at one time (user A and user B cannot log in to the system within the same browser window). This is done thanks to cookies
                        and sessions.</p>

                    <p style={{ color: "#3DC8E0", fontWeight: "900" }}>Full List of User Features:</p>
                    <p>1. Change between a ‘regular’ user account and a ‘contributing’ user account. If a user changes account types, it should only affect their ability to carry out an action in the future.
                        That is, anything created by a user while they have a contributing user account should remain unaffected if the user switches back to a regular account.</p>
                    <p>2. View and manage the people they follow. The user should be able to navigate to the personal page of any person they have followed. The user should be able to stop following any person that they have followed.</p>
                    <p>3. View and manage the other users they follow. The user should be able to navigate to the user page of any user they have followed. The user should be able to stop following any user that they have followed.</p>
                    <p>4. View recommended movies. These recommendations should be made based on what information your web application knows about the user, such as what movies they have reviewed or what people/users they have followed.</p>
                    <p>5. Search for movies by title, name, and/or genre keyword, at minimum. Additional types of search can also be included. The user must be able to navigate to the movie page for any of the search results.</p>

                    <p style={{ color: "#3DC8E0", fontWeight: "900" }}>Contributing Users</p>
                    <p>A special type of user that a regular user can choose to become which grants them special features:</p>
                    <p>1. Add a new person to the database by specifying their name. If the name already exists, the user will not be able to add the new person.</p>
                    <p>2. Add a new movie by specifying all of the minimum information required by your system, including at least one writer, director, and actor. The user should
                    only be allowed to add people to a movie if that person exists in the database already.</p>
                    <p>3. When viewing a movie, be able to edit the movie by adding actors, writers,and/or directors.</p>

                    <p style={{ color: "#3DC8E0", fontWeight: "900" }}>Viewing Users</p>
                    <img src={four}></img>
                    <p>1. See a list of all of the reviews this user has made and be able to read each full review</p>
                    <p>2. See a list of all of the people this user has followed and be able to navigate to each person’s page.</p>
                    <p>3. Ability to follow the user</p>

                    <hr class="solid"></hr>
                    <p style={{ fontWeight: "900", color: "#2DCCC7", fontSize: "large" }}>Viewing People (Actors, Writers, Directors)</p>
                    <img src={three}></img>
                    <p>1. See a history of all of this person’s work. Each movie entry allows the user to navigate to that movie’s page.</p>
                    <p>2. Choose to follow this person. If a user follows a person, the user should receive a notification any time a new movie is added to the database that
                    involves this person, or any time this person is added to an existing movie.</p>

                    <hr class="solid"></hr>
                    <p style={{ fontWeight: "900", color: "#2DCCC7", fontSize: "large" }}>Movies</p>
                    <p>The movie data is from a .json file containing movie information from 9125 movies off of the OMDb API</p>
                    <img src={two}></img>
                    <p>1. See the basic movie information, including at minimum: the title, release year, average rating, runtime, and plot.</p>
                    <p>2. See the genre keywords and allow the user to navigate to search results that contain movies with that genre keyword.</p>
                    <p>3. See the director, writer, and actors the movie has, which should also allow the user to navigate directly to each person’s page.</p>
                    <p>4. See a list of similar movies to this one and allow the user to navigate to the page for any of those movies. How similarity is defined is up to you, though
                    you should be able to support your algorithm design with logical arguments.</p>
                    <p>5. See movie reviews that have been added for the movie.</p>
                    <p>6. Add a basic review by specifying a score out of 10.</p>
                    <p>7. Add a full review by specifying a score out of 10, a brief summary, and a full review text. You can use automatically generated text from an available
                    package to fill these values quickly but must support manual entry as well.</p>

                    <hr class="solid"></hr>
                    <p style={{ fontWeight: "900", color: "#2DCCC7", fontSize: "large" }}>REST API</p>
                    <p>Created a a public JSON REST API that supports the following routes and parameters:</p>

                    <p style={{ color: "#3DC8E0", fontWeight: "900" }}>GET /movies</p>
                    <p>Allows searching for movies in the database. Returns an array of movies that match the query constraints. Must support at least the following query parameters:</p>
                    <p>1. title – A string that should be considered a match for any movie that has a title containing the given string title (character case should be ignored).
                    If no value is given for this parameter, all movies will match the title constraint.</p>
                    <p>2. genre – A string that should be considered a match if the movie’s list of genre keywords contains the given keyword. If no value is given for
                    this parameter, all movies will match the genre constraint.</p>
                    <p>3. minrating – A number that should be considered a match if the movie’s overall average review rating on your site is greater than or equal to
                    the given value. If a movie does not have any reviews, the number value of its rating should be considered 0.</p>

                    <hr class="solid"></hr>
                    <p style={{ color: "#3DC8E0", fontWeight: "900" }}>GET /writer, /actors, /directors</p>
                    <p>Allows searching for people within the movie database which supports an optional name query parameter. If this query parameter is included, it will return any person
                    in the database whose name contains the given name parameter. The search should also be done in a case-insensitive nature. If no parameter is given, all people should match
                    the query and be displayed.</p>

                    <p style={{ color: "#3DC8E0", fontWeight: "900" }}>GET /writer/:id, /actors/:id, /directors/:id</p>
                    <p>Retrieves the person with the given unique ID. The unique ID is provided by UUID and this query search will result in the server loading the person's
                    page</p>

                    <hr class="solid"></hr>
                    <p style={{ color: "#3DC8E0", fontWeight: "900" }}>GET /users</p>
                    <p>Allows searching for users within the movie database which supports an optional name query parameter. If this query parameter is included, it will return any user
                    in the database whose name contains the given name parameter. The search should also be done in a case-insensitive nature. If no parameter is given, all users should match
                    the query and be displayed.</p>

                    <p style={{ color: "#3DC8E0", fontWeight: "900" }}>GET /users/:id</p>
                    <p>Retrieves the user with the given unique ID. The unique ID is provided by UUID and this query search will result in the server loading the user's
                    page</p>

                    <hr class="solid"></hr>
                    <p style={{ fontWeight: "900", color: "#2DCCC7", fontSize: "large" }}>Additional Features</p>

                    <p style={{ color: "#3DC8E0", fontWeight: "900" }}>Advanced Genre Filter</p>
                    <img src={one}></img>
                    <p>1. Allows the user to filter the database to bring up a list of movies that contain all the genres selected</p>
                    <p>2. This gives the user a more precise tool to narrow down their movie selection as the user can be as precise as they want to be</p>

                    <p style={{ color: "#3DC8E0", fontWeight: "900" }}>Search Bars</p>
                    <img src={five}></img>
                    <p>1. Allows the user to easily use the REST API with various filters for query searching</p>
                    <p>2. Search Bars are split into 2 categories: movies and people</p>
                    <p>Movie Search Bar: Filter (genre[single], minrating, and title</p>
                    <p>People Search Bar: Type (actor, director, writer) and Filter (name, works)</p>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Erictran004/Movie-Database"><GitHubIcon style={{ fill: "black" }} /></a>
                </div>
            </div>
        )
    }
}

export default MovieDatabase;