import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import TabNav from './../Components/TabNav'
import Tab from './../Components/Tab';

import './../Components/Projects.css';
import './../Components/font.css';

import one from './../Files/MovieDatabase/one.png';
import two from './../Files/MovieDatabase/two.png';
import three from './../Files/MovieDatabase/three.png';
import four from './../Files/MovieDatabase/four.png';
import five from './../Files/MovieDatabase/five.png';

import ascii1 from './../Files/ASCII Game/1.PNG'
import ascii2 from './../Files/ASCII Game/2.PNG'
import ascii3 from './../Files/ASCII Game/3.PNG'
import ascii4 from './../Files/ASCII Game/4.PNG'
import ascii5 from './../Files/ASCII Game/5.PNG'
import ascii6 from './../Files/ASCII Game/6.PNG'

import ElectronicStore from './../Files/ElectronicStore.PNG'
class Projects extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: "Movie Database"
        }
    }
    setSelected = (tab) => {
        this.setState({ selected: tab });
    }
    render() {
        return (
            <div className="App mt-4">
                <TabNav tabs={['Movie Database', 'Portfolio Site', 'Python ASCII Game', 'Java Electronic Store']} selected={this.state.selected} setSelected={this.setSelected}>
                    <Tab isSelected={this.state.selected === 'Movie Database'}>
                        <div className="Project">
                            <div className="MovieDatabase">
                                <p>
                                    This was a term long group project that was done during the fall 2020 semester for my intro to web development class. It was a great experience that
                                    taught me about maintaining healthy group dynamics and managing time in order to meet deadlines. The website's server code uses Node.js and all client resources required by the website are served by said server
                                    The site also applies RESTful API design very well which will be talked about later.
                                </p>

                                <a target="_blank" rel="noreferrer" href="https://github.com/Erictran004/Movie-Database"><GitHubIcon style={{ fill: "black" }} /></a>
                                <p>The project was to create a web application similar to imdb and supported the following features:</p>

                                <hr class="solid"></hr>
                                <p style={{ fontWeight: "900", color: "#2DCCC7", fontSize: "24px" }}><u>Users</u></p>
                                <p>The website allows users to create new accounts by specifying a username and password. Usernames must be unique. The user is then able to log in and out of the system using their username and password.
                                Within a single browser instance, only a single user will be able to be logged in at one time (user A and user B cannot log in to the system within the same browser window). This is done thanks to cookies
                                and sessions.</p>

                                <p style={{ color: "#3DC8E0", fontWeight: "900", fontSize: "22px" }}>Full List of User Features:</p>
                                <p>1. Change between a ‘regular’ user account and a ‘contributing’ user account. If a user changes account types, it will only affect their ability to carry out an action in the future.
                                That is, anything created by a user while they have a contributing user account will remain unaffected if the user switches back to a regular account.</p>
                                <p>2. View and manage the people they follow. The user will be able to navigate to the personal page of any person they have followed. The user will have the ability to stop following any person that they have followed.</p>
                                <p>3. View and manage the other users they follow. The user will be able to navigate to the user page of any user they have followed. The user will have the ability to stop following any user that they have followed.</p>
                                <p>4. Search for movies by title, name, and/or genre keyword, at minimum. Additional types of search can also be included. The user must be able to navigate to the movie page for any of the search results.</p>

                                <p style={{ color: "#3DC8E0", fontWeight: "900", fontSize: "22px" }}>Contributing Users</p>
                                <p>A special type of user that a regular user can choose to become which grants them special features:</p>
                                <p>1. Add a new person to the database by specifying their name. If the name already exists, the user will not be able to add the new person.</p>
                                <p>2. Add a new movie by specifying all of the minimum information required by your system, including at least one writer, director, and actor. The user will
                                only be allowed to add people to a movie if that person exists in the database already.</p>
                                <p>3. When viewing a movie, be able to edit the movie by adding actors, writers,and/or directors.</p>

                                <p style={{ color: "#3DC8E0", fontWeight: "900", fontSize: "22px" }}>Viewing Users</p>
                                <img src={four} alt=""></img>
                                <p>1. See a list of all of the reviews this user has made and be able to read each full review</p>
                                <p>2. See a list of all of the people this user has followed and be able to navigate to each person’s page.</p>
                                <p>3. Ability to follow the user</p>

                                <hr class="solid"></hr>
                                <p style={{ fontWeight: "900", color: "#2DCCC7", fontSize: "24px" }}><u>Viewing People (Actors, Writers, Directors)</u></p>
                                <img src={three} alt=""></img>
                                <p>1. See a history of all of this person’s work. Each movie entry allows the user to navigate to that movie’s page.</p>

                                <hr class="solid"></hr>
                                <p style={{ fontWeight: "900", color: "#2DCCC7", fontSize: "22px" }}><u>Movies</u></p>
                                <p>The movie data is from a .json file containing movie information from 9125 movies off of the OMDb API</p>
                                <img src={two} alt=""></img>
                                <p>1. See the basic movie information, including at minimum: the title, release year, average rating, runtime, and plot.</p>
                                <p>2. See the genre keywords and allow the user to navigate to search results that contain movies with that genre keyword.</p>
                                <p>3. See the director, writer, and actors the movie has, which will also allow the user to navigate directly to each person’s page.</p>
                                <p>4. See a list of similar movies to this one and allow the user to navigate to the page for any of those movies. How similarity is defined is up to you, though
                                you will be able to support your algorithm design with logical arguments.</p>
                                <p>5. See movie reviews that have been added for the movie.</p>
                                <p>6. Add a basic review by specifying a score out of 10.</p>
                                <p>7. Add a full review by specifying a score out of 10, a brief summary, and a full review text. You can use automatically generated text from an available
                                package to fill these values quickly but must support manual entry as well.</p>

                                <hr class="solid"></hr>
                                <p style={{ fontWeight: "900", color: "#2DCCC7", fontSize: "24px" }}><u>REST API</u></p>
                                <p>Created a a public JSON REST API that supports the following routes and parameters:</p>

                                <p style={{ color: "#3DC8E0", fontWeight: "900" }}>GET /movies</p>
                                <p>Allows searching for movies in the database. Returns an array of movies that match the query constraints. Must support at least the following query parameters:</p>
                                <p>1. title – A string that will be considered a match for any movie that has a title containing the given string title (character case will be ignored).
                                If no value is given for this parameter, all movies will match the title constraint.</p>
                                <p>2. genre – A string that will be considered a match if the movie’s list of genre keywords contains the given keyword. If no value is given for
                                this parameter, all movies will match the genre constraint.</p>
                                <p>3. minrating – A number that will be considered a match if the movie’s overall average review rating on your site is greater than or equal to
                                the given value. If a movie does not have any reviews, the number value of its rating will be considered 0.</p>

                                <p style={{ color: "#3DC8E0", fontWeight: "900", fontSize: "22px" }}>GET /writer, /actors, /directors</p>
                                <p>Allows searching for people within the movie database which supports an optional name query parameter. If this query parameter is included, it will return any person
                                in the database whose name contains the given name parameter. The search will also be done in a case-insensitive nature. If no parameter is given, all people will match
                                the query and be displayed.</p>

                                <p style={{ color: "#3DC8E0", fontWeight: "900", fontSize: "22px" }}>GET /writer/:id, /actors/:id, /directors/:id</p>
                                <p>Retrieves the person with the given unique ID. The unique ID is provided by UUID and this query search will result in the server loading the person's
                                page</p>

                                <p style={{ color: "#3DC8E0", fontWeight: "900", fontSize: "22px" }}>GET /users</p>
                                <p>Allows searching for users within the movie database which supports an optional name query parameter. If this query parameter is included, it will return any user
                                in the database whose name contains the given name parameter. The search will also be done in a case-insensitive nature. If no parameter is given, all users will match
                                the query and be displayed.</p>

                                <p style={{ color: "#3DC8E0", fontWeight: "900", fontSize: "22px" }}>GET /users/:id</p>
                                <p>Retrieves the user with the given unique ID. The unique ID is provided by UUID and this query search will result in the server loading the user's
                                page</p>

                                <hr class="solid"></hr>
                                <p style={{ fontWeight: "900", color: "#2DCCC7", fontSize: "24px" }}><u>Additional Features</u></p>

                                <p style={{ color: "#3DC8E0", fontWeight: "900", fontSize: "22px" }}>Advanced Genre Filter</p>
                                <img src={one} alt=""></img>
                                <p>1. Allows the user to filter the database to bring up a list of movies that contain all the genres selected</p>
                                <p>2. This gives the user a more precise tool to narrow down their movie selection as the user can be as precise as they want to be</p>

                                <p style={{ color: "#3DC8E0", fontWeight: "900", fontSize: "22px" }}>Search Bars</p>
                                <img src={five} alt=""></img>
                                <p>1. Allows the user to easily use the REST API with various filters for query searching</p>
                                <p>2. Search Bars are split into 2 categories: movies and people</p>
                                <p>Movie Search Bar: Filter (genre[single], minrating, and title</p>
                                <p>People Search Bar: Type (actor, director, writer) and Filter (name, works)</p>

                            </div>
                        </div>
                    </Tab>

                    <Tab isSelected={this.state.selected === 'Portfolio Site'}>
                        <div className="Project">
                            <div className="Porfolio">
                                <p>I developed this site over the 2020 Christmas break as I lacked a true way to display my projects I have done throughout my short time as a programmer. This project also served as my introduction to
                                React, Bootstrap, and Materials UI </p>

                                <p>The website is by no means in its final form and there can be a lot to improve on. I plan to learn how to animate web pages and will apply my knowledge to this site</p>
                                <a target="_blank" rel="noreferrer" href="https://github.com/Erictran004/PortfolioCode"><GitHubIcon style={{ fill: "black" }} /></a>

                                <hr class="solid"></hr>
                                <p style={{ fontWeight: "900", color: "#2DCCC7", fontSize: "24px" }}><u>Things I learnt</u></p>
                                <p>-How to successfully build a website using React</p>
                                <p>-Learnt about bootstrap styling and react tabs</p>
                                <p>-Developed my skills in debugging and problem solving through learnign how to deploy and maintain a site through github pages</p>
                            </div>
                        </div>
                    </Tab>

                    <Tab isSelected={this.state.selected === 'Python ASCII Game'}>
                        <div className='Project'>
                            <div className="ASCII Game">
                                <p>This was a project developed in my Intro to Computer Science course in my first year. The game progresses through 5 levels with each level being a unique board loaded from a text file.
                                The game board is a 2D list of symbols (&, @, #, %) and the way to progress through each level was to comepletely fill the board with one symbol in the least amount of moves possible.
                                In the future I would like to return to this project and incoporate a proper GUI for it using Tkinter.
                                </p>

                                <p>A player's move consists of picking a symbol and a location on the board (based on row & column). Based on the location all contiguous symbols (matching symbols in adjacent locations) are changed
                                to the user's selected symbol.
                                </p>

                                <a target="_blank" rel="noreferrer" href="https://github.com/Erictran004/ASCII-Game"><GitHubIcon style={{ fill: "black" }} /></a>

                                <hr class="solid"></hr>
                                <p style={{ fontWeight: "900", color: "#2DCCC7", fontSize: "24px" }}><u>Things I learnt</u></p>
                                <p>-Learned how to read and proccess information given in a text file</p>
                                <p>-Applied knowledge of recursion to traverse through the board and replace the correct symbols according to the game rule</p>

                                <hr class="solid"></hr>
                                <p style={{ fontWeight: "900", color: "#2DCCC7", fontSize: "24px" }}><u>Example Run</u></p>
                                <img src={ascii1} alt=""></img>
                                <img src={ascii2} alt=""></img>
                                <img src={ascii3} alt=""></img>
                                <img src={ascii4} alt=""></img>
                                <img src={ascii5} alt=""></img>
                                <img src={ascii6} alt=""></img>
                            </div>
                        </div>

                    </Tab>

                    <Tab isSelected={this.state.selected === 'Java Electronic Store'}>
                        <div className='Project'>
                            <div className="ASCII Game">
                                <p>This was a project developed in my Intro to Computer Science II course in my first year. The project was to develop a GUI for an electronic store model. The GUI would simulate the checkout process
                                of a store by being able to add/remove things from their cart, a store stock (can't buy more than what is available), and a most popular section which shows the top three items bought from the store.
                                </p>

                                <hr class="solid"></hr>
                                <img src={ElectronicStore} alt=""></img>
                                <p style={{ fontWeight: "900", color: "#2DCCC7", fontSize: "24px" }}><u>Things I learnt</u></p>
                                <p>-Learnt about the Model/View/Controller paradigm</p>
                                <p>-Applied principles of OOP (encapsulation, abstraction, inheritance, and polymorphism)</p>
                            </div>
                        </div>
                    </Tab>
                </TabNav>
            </div>
        )
    }
}
export default Projects;