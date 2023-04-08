/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import Itv from "./types/TVtypes";
import MyApp from "./Carousel/Capp";
import ShowsServices from "../services/ShowsServices";
import Tvshow from "./Tvshow";
import Footer from "./Footer";


export default function TVShows() {
  const [TVShows, setTVShows] = useState<Array<Itv>>([]);

  const getTVShow = () => {
    ShowsServices.getAll()
      .then((response: any) => {
        setTVShows(response.data);
        console.log(response.data);
      })

      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getTVShow();
  }, []);

  return (
    
    <div className="has-background-black">
      
      <h1 className="title is-1 has-text-white has-text-centered pt-6">TV Shows</h1>
      <MyApp></MyApp>
      <div className="container has-text-centered has-background-dark">
        <div className="">
          
          <h2 className=""></h2>

        </div>

        <div className="section has-background-gray">

          <div className="columns is-multiline">
            {
              TVShows.map((tvshow, index) => (
                <div className="column is-one-third has-background-backgrounddark">




                  <div className="card">
                    <div className="card-image">
                      <figure className="image">
                        <img src={tvshow.Image} alt="Placeholder image" />
                      </figure>
                    </div>
                    <div className="card-content has-background-black">
                      <div className="content">
                        <h1 className="title has-text-white">{tvshow.ShowName}</h1>



                      </div>
                    </div>

                    <footer className="card-footer-padding-horizontal has-background-black">



                      <a href={tvshow.id} className="button has-background-success-dark is-success is-fullwidth is-rounded">Watch</a>


                      





                    </footer>
                    
                  </div>
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </div>











  )
}
