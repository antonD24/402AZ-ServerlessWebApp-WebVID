import React, { useEffect, useState, ChangeEvent } from "react";
import ShowsServices from "../services/ShowsServices";
import { Link, useParams } from "react-router-dom";
import Itv from "./types/TVtypes";
import { Auth } from "aws-amplify";
import Tvshow from "./Tvshow";


// this is the Admin page of the service, here shows can be managed, adding shows, deleteing and acessing the update page for each of them



export default function ShowAdmin() {

    const { id } = useParams();

    const [TVShows, setTVShows] = useState<Array<Itv>>([]);
    const [tvshow, setTVShow] = useState<Itv>({
        id: "",
        Actors: "",
        AgeRating: "",
        DirectedBy: "",
        Language: "",
        Network: "",
        NrOfSeasons: "",
        EpisodeDuration: "",
        Image: "",
        Plot: "",
        ProducedBy: "",
        ReleaseDate: "",
        Season1: "",
        Season10: "",
        Season11: "",
        Season2: "",
        Season3: "",
        Season4: "",
        Season5: "",
        Season6: "",
        Season7: "",
        Season8: "",
        Season9: "",
        ShowName: ""
    });
    // above we can see the types imported from the TV types file, these will be used to assign the imputed data inside the add form
    // it follows the structure of the database created in DynamoDB

    const getTVShows = () => {
        ShowsServices.getAll()
            .then((response: any) => {
                setTVShows(response.data);
                console.log(response.data);
            })

            .catch((e: Error) => {
                console.log(e)

            });
    };

    const handleChange = (event: any) => {
        setTVShow({ ...tvshow, [event.target.name]: event.target.value });
        console.log(tvshow)
    };

    const saveTVShow = () => {
        const savedTVShow = { ...tvshow };
        let id: string = savedTVShow.id;

        savedTVShow.id = id;
        ShowsServices.put(savedTVShow)
            .then((response: any) => {
                alert(response.data);
                getTVShows();
            })
            .catch((e: Error) => {
                alert(e);
                console.log(e);
            })

    };

    // each sonstant performs one of the CRUD operations of our lambda function and is linked to the API through the use of axios

    const deleteTVShow = (id: string) => {
        console.log(id)
        ShowsServices.remove(id)
            .then((response: any) => {
                alert(response.data)
                getTVShows();
            })
            .catch((e: Error) => {
                alert(e);
                console.log(e);
            })

    }

    useEffect(() => {
        getTVShows();
    }, [])


    // the useEffect hook tells the React app that it needs to use the getTVShows function after rendering the page
    // this triggers the communication with the API and retreives all items in the databse and renders it at specified in the code bellow



    return (
        <div className="has-background-success-dark">

            <section className="box has-background-black has-text-centered pt-6">
                <h1 className="title is-1 has-text-white">Manage Shows</h1>
                <h2 className=""></h2>
            </section>
            <div className="columns is-multiline">

                <div className="column is-half pl-6 mt-6 pt-6 pb-6">

                    <div className="box has-background-dark">
                        <h4 className="has-text-centered title is-1 has-text-white">Current Shows</h4>
                        <div className="section">
                            <div className="columns is-multiline">
                                {
                                    TVShows.map((tvshow, index) => (

                                        // the .map is used for displaying a list of similar objects of a component
                                        // this function can be called on an array and a new object is rendered for each item available in the database
                                        // by using this function we can map each element of an array to a component
                                        // EX: images, text and id's in the database 
                                        // by doing this we have a granular control over the elements that are displayed and they can be manipulated
                                        // in any way EX: displaying images and name in cards and asssigning to open the page of the tv show by clicking the 
                                        // watch or view button, since it is assigned to the shows id
                                        // the update button on each card, opens a new page using the show id for editing the show details
                                        // automatically populating the form fields with the current information in the database

                                        <div className="column is-half has-background-backgrounddark">

                                            <div className="card has-background-black">
                                                <div className="card-image">
                                                    <figure className="image">
                                                        <img src={tvshow.Image}></img>
                                                    </figure>
                                                </div>
                                                <div className="has-text-centered mt-4">
                                                    <h3 className="has-text-white mb-5">ID:  {tvshow.id}</h3>
                                                </div>


                                                <div className="has-text-centered mt-3">
                                                    <a href={tvshow.id} target="_blank" rel="noopener noreferrer" className="button is-rounded is-link mb-3">View Show</a>
                                                    <a href={`UpdateShow/${tvshow.id}`} target="_blank" rel="noopener noreferrer" className="button is-rounded is-warning mb-3 ml-5">Update</a>
                                                    <p>
                                                        <button className="button is-rounded is-danger is-fullwidth mt-3 mb-3" onClick={() => { deleteTVShow(tvshow.id) }}>DELETE</button>
                                                    </p>

                                                </div>





                                            </div>



                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className="column is-half mt-6 pr-6 pt-6 pb-6">
                    <div className="box has-background-dark">

                        <div className="content">
                            {// the form bellow takes each value for adding a new tv show and passes it to the types and in term the api passes it to the Lambda 
                            // function which by using a PUT function, updates the database with the nuew information, which is instantly available to the application
                            // to display
                            }
                            <form>
                                <h1 className="has-text-centered title is-1" ><strong className="has-text-white">Add a show</strong></h1>
                                <p className="has-text-white">TV Show ID</p>
                                <input className="input is-rounded" type="text" name="id" placeholder="Show ID" value={tvshow.id} onChange={handleChange} />
                                <p className="has-text-white">Actors</p>
                                <textarea className="textarea is-rounded" name="Actors" placeholder="Actors" value={tvshow.Actors} onChange={handleChange} />
                                <p className="has-text-white">Age Rating</p>
                                <input className="input is-rounded" type="text" name="AgeRating" placeholder="Age Rating" value={tvshow.AgeRating} onChange={handleChange} />
                                <p className="has-text-white">Directed by</p>
                                <textarea className="textarea is-rounded" name="DirectedBy" placeholder="Directed By" value={tvshow.DirectedBy} onChange={handleChange} />
                                <p className="has-text-white">Language</p>
                                <input className="input is-rounded" type="text" name="Language" placeholder="Language" value={tvshow.Language} onChange={handleChange} />
                                <p className="has-text-white">Network</p>
                                <input className="input is-rounded" type="text" name="Network" placeholder="Network" value={tvshow.Network} onChange={handleChange} />
                                <p className="has-text-white">Nr. of Seasons</p>
                                <input className="input is-rounded" type="text" name="NrOfSeasons" placeholder="Nr. of Seasons" value={tvshow.NrOfSeasons} onChange={handleChange} />
                                <p className="has-text-white">Episode Duration</p>
                                <input className="input is-rounded" type="text" name="EpisodeDuration" placeholder="Episode Duration" value={tvshow.EpisodeDuration} onChange={handleChange} />
                                <p className="has-text-white">Image</p>
                                <input className="input is-rounded" type="text" name="Image" placeholder="Image" value={tvshow.Image} onChange={handleChange} />
                                <p className="has-text-white">Plot</p>
                                <textarea className="textarea is-rounded" name="Plot" placeholder="Plot" value={tvshow.Plot} onChange={handleChange} />
                                <p className="has-text-white">Produced By</p>
                                <textarea className="textarea is-rounded" name="ProducedBy" placeholder="Produced By" value={tvshow.ProducedBy} onChange={handleChange} />
                                <p className="has-text-white">Release Date</p>
                                <input className="input is-rounded" type="text" name="ReleaseDate" placeholder="ReleaseDate" value={tvshow.ReleaseDate} onChange={handleChange} />
                                <p className="has-text-white">Season 1</p>
                                <input className="input is-rounded" type="text" name="Season1" placeholder="Season 1" value={tvshow.Season1} onChange={handleChange} />
                                <p className="has-text-white">Season 2</p>
                                <input className="input is-rounded" type="text" name="Season2" placeholder="Season 2" value={tvshow.Season2} onChange={handleChange} />
                                <p className="has-text-white">Season 3</p>
                                <input className="input is-rounded" type="text" name="Season3" placeholder="Season 3" value={tvshow.Season3} onChange={handleChange} />
                                <p className="has-text-white">Season 4</p>
                                <input className="input is-rounded" type="text" name="Season4" placeholder="Season 4" value={tvshow.Season4} onChange={handleChange} />
                                <p className="has-text-white">Season 5</p>
                                <input className="input is-rounded" type="text" name="Season5" placeholder="Season 5" value={tvshow.Season5} onChange={handleChange} />
                                <p className="has-text-white">Season 6</p>
                                <input className="input is-rounded" type="text" name="Season6" placeholder="Season 6" value={tvshow.Season6} onChange={handleChange} />
                                <p className="has-text-white">Season 7</p>
                                <input className="input is-rounded" type="text" name="Season7" placeholder="Season 7" value={tvshow.Season7} onChange={handleChange} />
                                <p className="has-text-white">Season 8</p>
                                <input className="input is-rounded" type="text" name="Season8" placeholder="Season 8" value={tvshow.Season8} onChange={handleChange} />
                                <p className="has-text-white">Season 9</p>
                                <input className="input is-rounded" type="text" name="Season9" placeholder="Season 9" value={tvshow.Season9} onChange={handleChange} />
                                <p className="has-text-white">Season 10</p>
                                <input className="input is-rounded" type="text" name="Season10" placeholder="Season 10" value={tvshow.Season10} onChange={handleChange} />
                                <p className="has-text-white">Season 11</p>
                                <input className="input is-rounded" type="text" name="Season11" placeholder="Season 11" value={tvshow.Season11} onChange={handleChange} />
                                <p className="has-text-white">Show Name</p>
                                <input className="input is-rounded" type="text" name="ShowName" placeholder="TV Show Name" value={tvshow.ShowName} onChange={handleChange} />

                            </form>
                            <h1 className="title-1"></h1>
                            <div className="has-text-centered">
                                <button className="button is-large is-rounded is-info" onClick={() => { saveTVShow() }}> Add Show</button>
                                {// by clicking the Add Show button the saveTVHhow function is triggered and takes the inserted data and passes it to the API

                                }
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    )




}