/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Itv from "./types/TVtypes";
import ShowsServices from "../services/ShowsServices";






export default function Tvshow() {

    const { id } = useParams();

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
        Season2: "",
        Season3: "",
        Season4: "",
        Season5: "",
        Season6: "",
        Season7: "",
        Season8: "",
        Season9: "",
        Season10: "",
        Season11: "",
        ShowName: ""

    });

    const getTVShow = (id: string) => {
        ShowsServices.get(id)
            .then((response: any) => {
                setTVShow(response.data);
                console.log("test")
                console.log(response.data);
            })
            .catch((e: Error) => {
                console.log(e);
            })

    };

    useEffect(() => {
        if (id) {
            getTVShow(id);
        }
    }, [id])

    // the useEffect hook tells the React app that it needs to use the getTVShow function after rendering the page
    // this triggers the communication with the API and retreives the item in the database that matches the id it first received from the 
    // main shows page and as a result the app gets all the information assigned to that item and is available for use to render all the required elements.

    // This is the tabs component of the page which allows season selection
    // using event listeners, after clicking a certain tab the code hides the content that is actively displayed 
    // by using id's for each tab the app knows which tab to switch to being active and what tab needs to be hidden along with it's contents
    const tabs = document.querySelectorAll('.tabs li');
    const tabContentBoxes = document.querySelectorAll('#tab-content > div');

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach(item => item.classList.remove('is-active'))
            tab.classList.add('is-active');

            const target = (tab as HTMLElement).dataset.target;
            tabContentBoxes.forEach(box => {
                if (box.getAttribute('id') === target) {
                    box.classList.remove('is-hidden');

                } else {
                    box.classList.add('is-hidden');
                }

            })
        })
    })


    return (

        <div className="has-background-black">


            <div className="container has-background-dark">
                <h1 className="title is-1"></h1>
                <h1 className="title is-1"></h1>
                <div className="">

                    <h1 className="title is-1 has-text-white"><strong>{tvshow.ShowName}</strong></h1>


                </div>

                <div className="section has-background-gray">

                    <div className="columns is-multiline">

                        <div className="column is-half">

                            <figure className="image">
                                <img src={tvshow.Image} />
                            </figure>

                            <div className="">
                                <h1 className="title-is-1"></h1>
                                <div className="box has-background-black">
                                    <div className=" is-size-3 has-text-white">Trailer</div>

                                </div>
                            </div>
                            <h1 className="has-text-dark">a</h1>
                            <div className="box has-background-black">
                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${tvshow.id}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"></iframe>
                                {
                                    //The code above is the pre-built youtube code that allow embeding youtube videos on other websites 
                                    // since we are using the video id's for the show id's in the databse
                                    // it has been modified to use the id of each show to load the trailer of the show 
                                }
                            </div>






                        </div>

                            {
                                // in the code below we can see all the types of the tv show being mapped to individual boxes 
                                // that display the infromation in a separate manner which improves readability and design
                                // and because all of it is assigned to one show id, when the website renders the page it dynamically assigns the 
                                // appropriate information to the elements
                            }

                        <div className="column is-half">

                            <div className="content has-text-white">
                                <div className="box has-background-black has-text-white">
                                    <p className="is-size-4">Age Rating: <p className="is-size-5">{tvshow.AgeRating}</p></p>
                                </div>
                                <div className="box has-background-black has-text-white">
                                    <p>Release Date: {tvshow.ReleaseDate}</p>
                                </div>
                                <div className="box has-background-black has-text-white">
                                    <p>Plot: {tvshow.Plot}</p>
                                </div>
                                <div className="box has-background-black has-text-white">
                                    <p>Actors: {tvshow.Actors}</p>
                                </div>
                                <div className="box has-background-black has-text-white">
                                    <p>Number of Seasons: {tvshow.NrOfSeasons}</p>
                                </div>
                                <div className="box has-background-black has-text-white">
                                    <p>Episode Duration: {tvshow.EpisodeDuration}</p>
                                </div>
                                <div className="box has-background-black has-text-white">
                                    <p>Language: {tvshow.Language}</p>
                                </div>
                                <div className="box has-background-black has-text-white">
                                    <p>Directed By: {tvshow.DirectedBy}</p>
                                </div>
                                <div className="box has-background-black has-text-white">
                                    <p>Produced By: {tvshow.ProducedBy}</p>
                                </div>
                                <div className="box has-background-black has-text-white">
                                    <p>Network: {tvshow.Network}</p>
                                </div>




                            </div>

                        </div>




                    </div>
                </div>
                
                            {
                                // this is the prebult tab structure that the Bulma CSS framework offers 
                                // this element is used to provide easy switching between seasons 
                            }

                <div className="section has-background-gray">
                    <div className="tabs is-medium is-centered has-background-black">
                        <ul>
                            <li className="is-active" data-target="Season-1">
                                <a>

                                    <span className="has-text-white">Season 1</span>
                                </a>

                            </li>

                            <li data-target="Season-2">
                                <a>

                                    <span className="has-text-white">Season 2</span>
                                </a>
                            </li>
                            <li data-target="Season-3">
                                <a>

                                    <span className="has-text-white">Season 3</span>
                                </a>
                            </li>

                        </ul>
                    </div>
                    <div className="px-2" id="tab-content">
                        <div id="Season-1">
                            <h3 className="is-size-5 title">Season 1</h3>


                            <a className="box has-background-black">

                                <iframe width="960" height="540" src={`https://www.youtube.com/embed/${tvshow.Season1}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"></iframe>

                            </a>

                                {
                                    //The code above is the pre-built youtube code that allow embeding youtube videos on other websites 
                                    // it has been modified to use the data in the season data type which contains the video id from youtube
                                }

                        </div>
                        <div id="Season-2" className="is-hidden">
                            <h3 className="is-size-5 title">Season 2</h3>

                            <a className="box has-background-black">

                                <iframe width="960" height="540" src={`https://www.youtube.com/embed/${tvshow.Season2}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"></iframe>

                            </a>

                        </div>

                        <div id="Season-3" className="is-hidden">
                            <h3 className="is-size-5 title">Season 3</h3>

                            <a className="box has-background-black">

                                <iframe width="960" height="540" src={`https://www.youtube.com/embed/${tvshow.Season3}`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"></iframe>

                            </a>

                        </div>

                    </div>

                </div>




            </div>

        </div >

    )



};