import React, { useEffect, useState, ChangeEvent } from "react";
import ShowsServices from "../services/ShowsServices";
import { Link } from "react-router-dom";
import Itv from "./types/TVtypes";
import tvshow from "./Tvshow";
import { ConsoleLogger } from "@aws-amplify/core";



export default function ShowAdmin() {

    const [TVShows, setTVShows] = useState<Array<Itv>>([]);
    const [tvshow, setTVShow] = useState<Itv>({
        id: "",
        Actors: [],
        AgeRating: "",
        DirecredBy: "",
        Language: "",
        Network: "",
        NrOfSeasons: "",
        EpisodeDuration: "",
        Image: "",
        Plot: "",
        ProducedBy: "",
        ReleaseDate: "",
        Season1: [],
        Season2: [],
        Season3: [],
        Season4: [],
        Season5: [],
        Season6: [],
        Season7: [],
        ShowName: ""
    });

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
        setTVShow({ ...tvshow, [event.target.name]: event.target.value});
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

    const updateTVShow = (intvshow: Itv) => {
        setTVShow(intvshow);
    };

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

    return (
        <div className="container">
            <section className="">
                <h1 className="title is-1 is light">View Show</h1>
                <h2 className=""></h2>
            </section>

            <section className="section">
                <div className="card">
                    <div className="card-content">
                        <form>
                            <h1><strong>Add or update a show</strong></h1>
                            <p>TV Show ID</p>
                            <input className="input is-rounded" type="text" name="id" placeholder="Show ID" value={tvshow.id} onChange={handleChange} />

                            <p>Show Name</p>
                            <input className="input is-rounded" type="text" name="ShowName" placeholder="TV Show Name" value={tvshow.ShowName} onChange={handleChange} />

                            <p>Release Date</p>
                            <input className="input is-rounded" type="text" name="ReleaseDate" placeholder="ReleaseDate" value={tvshow.ReleaseDate} onChange={handleChange} />


                            <p>Plot</p>
                            <input className="input is-rounded" type="text" name="Plot" placeholder="Plot" value={tvshow.Plot} onChange={handleChange} />

                            <p>Season 1</p>
                            <textarea className="textarea is-rounded" itemType="text" name="Season1" placeholder="Season 1" value={tvshow.Season1.join(", ")} onChange={handleChange} />

                            <p>Season 2</p>
                            <input className="input is-rounded" type="text" name="Season2" placeholder="Season 2" value={tvshow.Season2.join(", ")} onChange={handleChange} />

                            <p>Season 3</p>
                            <input className="input is-rounded" type="text" name="Season3" placeholder="Season 3" value={tvshow.Season3.join(", ")} onChange={handleChange} />

                            <p>Season 4</p>
                            <input className="input is-rounded" type="text" name="Season4" placeholder="Season 4" value={tvshow.Season4.join(", ")} onChange={handleChange} />

                            <p>Season 5</p>
                            <input className="input is-rounded" type="text" name="Season5" placeholder="Season 5" value={tvshow.Season5.join(", ")} onChange={handleChange} />

                            <p>Season 6</p>
                            <input className="input is-rounded" type="text" name="Season6" placeholder="Season 6" value={tvshow.Season6.join(", ")} onChange={handleChange} />

                            <p>Season 7</p>
                            <input className="input is-rounded" type="text" name="Season7" placeholder="Season 7" value={tvshow.Season7.join(", ")} onChange={handleChange} />

                            <p>Actors</p>
                            <input className="input is-rounded" type="text" name="Actors" placeholder="Actors" value={tvshow.Actors.join(", ")} onChange={handleChange} />


                            <p>Age Rating</p>
                            <input className="input is-rounded" type="text" name="AgeRating" placeholder="Age Rating" value={tvshow.AgeRating} onChange={handleChange} />

                            <p>Directed by</p>
                            <input className="input is-rounded" type="text" name="DirectedBy" placeholder="Directed By" value={tvshow.DirecredBy} onChange={handleChange} />

                            <p>Episode Duration</p>
                            <input className="input is-rounded" type="text" name="EpisodeDuration" placeholder="Episode Duration" value={tvshow.EpisodeDuration} onChange={handleChange} />

                            <p>Image</p>
                            <input className="input is-rounded" type="text" name="Image" placeholder="Image" value={tvshow.Image} onChange={handleChange} />

                            <p>Language</p>
                            <input className="input is-rounded" type="text" name="Language" placeholder="Language" value={tvshow.Language} onChange={handleChange} />

                            <p>Network</p>
                            <input className="input is-rounded" type="text" name="Network" placeholder="Network" value={tvshow.Network} onChange={handleChange} />

                            <p>Nr. of Seasons</p>
                            <input className="input is-rounded" type="text" name="NrOfSeasons" placeholder="Nr. of Seasons" value={tvshow.NrOfSeasons} onChange={handleChange} />

                            <p>Produced By</p>
                            <input className="input is-rounded" type="text" name="ProducedBy" placeholder="Produced By" value={tvshow.ProducedBy} onChange={handleChange} />






                        </form>
                        <button className="button is rounded is-success" onClick={() => { saveTVShow() }} > Add or Update Listing </button>

                    </div>

                </div>
                <div className="section">
                <div className="columns is-multiline">
                    {
                        TVShows.map((tvshow, index) => (

                            
                                <div className="column is-one-third has-background-backgrounddark">

                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image">
                                                <img src={tvshow.Image}></img>
                                            </figure>
                                        </div>
                                        <Link to={{ pathname: `/tvshow/${tvshow.id}` }}>
                                            <button className="button is-rounded">View Show</button>
                                        </Link>
                                    </div>



                                </div>
                            
                        ))
                    }
                </div>
                </div>

            </section >
        </div >
    )




}