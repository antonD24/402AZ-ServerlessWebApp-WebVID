import React, {useEffect, useState, ChangeEvent} from "react";
import ShowsServices from "../services/ShowsServices";
import {Link} from "react-router-dom";
import Itv from "./types/TVtypes";
import tvshow from "./tvshow";
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
        ShowName: ""
    });

    const getTVShows = () => {
        ShowsServices.getAll()
        .then((response:any) => {
            setTVShows(response.data);
            console.log(response.data);
        })

        .catch((e: Error) => {
            console.log(e)

        });
    };

    const handleChange = (event: any) => {
        setTVShow({...tvshow, [event.target.name]:event.target.value});
        console.log(tvshow)
    };

    const saveTVShow = () => {
        const savedTVShow = {...tvshow};
        let id: string = savedTVShow.id;
        savedTVShow.id = id;
        ShowsServices.put(savedTVShow)
        .then((response: any) => {
            alert(response.data);
            getTVShows();
        })
        .catch((e:Error) => {
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
        .catch((e : Error) => {
            alert(e);
            console.log(e);
        })
        
    }

    


}