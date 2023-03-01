import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Itv from "./types/TVtypes";
import ICast from "./types/Actors";

import MyApp from "./Carousel/Capp";

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import ShowsServices from "../services/ShowsServices";
export default function TVShows() {

    const { ShowID } = useParams();
    const [TTVShows, setTVShow] = useState<Array<Itv>>();

    const getTVShow = (ShowID: string) => {
        ShowsServices.get(ShowID)
            .then((response: any) => {
                setTVShow(response.data.Items);
                console.log(response.data.Items);
            })
            .catch((e: Error) => {
                console.log(e);
            })
    };
    useEffect(() => {
        if (ShowID) {
            getTVShow(ShowID);
        }
    }, [ShowID])

    return (

        <div className="container is-fluid">
            <section className="hero-body-is-large">

                <div className="hero-body">
                    <MyApp></MyApp>
                </div>
                <div className="container has-text-centered">
                    <p className="title">
                        TV Shows
                    </p>
                    <p>

                    </p>
                </div>

                <div className="columns">
                    <div className="column">
                        <div className="card">
                            <div className="card-image">
                                <figure className="image">
                                    
                                    <img src="https://m.media-amazon.com/images/I/A16HuooO3IL._AC_SL1500_.jpg"/>
                                </figure>

                            </div>
                            <div className="card">
                                <div className="card-content">
                                    <div className="content">
                                        <div>
                                        {
                                            TTVShows?.map((TVShow)=>(
                                                <p>${TVShow.ShowName}</p>

                                                
                                            ))
                                        }
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <footer className="card-footer">
                                    <a href="#" className="card-footer-item">Save</a>
                                    
                                </footer>
                            </div>
                        </div>

                    </div>
                    <div className="column">

                    </div>
                    <div className="column">

                    </div>
                    <div className="column">

                    </div>
                </div>



            </section>

        </div>








    )
}