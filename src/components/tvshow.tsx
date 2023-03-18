/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Itv from "./types/TVShows";
import ShowsServices from "../services/ShowsServices";
import { stringify } from "querystring";


export default function tvshow() {

    const { id } = useParams();

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
        ShowName: ""

    });

    const getTVShow = (id: string) => {
        ShowsServices.get(id)
            .then((response: any) => {
                setTVShow(response.data.Item);
                console.log("test")
                console.log(response.data.Item);
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

    return (
        <div className="card has-background-black">
            <div className="card-image">
                <figure className="image is-96x96">
                    <img src={tvshow.Image} alt="Placeholder image" />
                </figure>
            </div>
            <div className="card-content has-text-black">
                <div className="content has-text-black">
                    <p className=" "></p>
                    <p className="title is-4 has-text-black"><strong>{tvshow.ShowName}</strong></p>

                    <p className="card-item"><strong>Age Rating:</strong>{tvshow.AgeRating}</p>
                    <p className="card-item"><strong>Directed by:</strong>{tvshow.DirecredBy}</p>
                    <p className="card-item"><strong>Language:</strong>{tvshow.Language}</p>
                    <p className="card-item"><strong>No of Seasons:</strong>{tvshow.NrOfSeasons}</p>
                    <p className="card-item"><strong>Episode Duration:</strong>{tvshow.EpisodeDuration}</p>
                    <p className="card-item"><strong>Plot:</strong>{tvshow.Plot}</p>
                    <p className="card-item"><strong>Produced by:</strong>{tvshow.ProducedBy}</p>
                    <p className="card-item"><strong>Release Date:</strong>{tvshow.ReleaseDate}</p>



                </div>
            </div>
        </div>

    )



};