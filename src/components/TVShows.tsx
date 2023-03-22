/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Itv from "./types/TVtypes";
import MyApp from "./Carousel/Capp";
import ShowsServices from "../services/ShowsServices";
import tvshow from "./tvshow";


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

    <div className="container has-text-centered">
      <div className="">
        <h1 className="title is-1">TV Shows</h1>
        <h2 className=""></h2>
        <MyApp></MyApp>
      </div>
      <div className="section">
        <div className="columns is-multiline">
          {
            TVShows.map((tvshow, index) => (
              <div className="column is-one-third">




                <div className="card">
                  <div className="card-image">
                    <figure className="image">
                      <img src={tvshow.Image} alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                     {tvshow.ShowName}

                    </div>
                  </div>
                  <footer className="card-footer">
                    <a href={tvshow.id} className="card-footer-item">Watch</a>
                    
                  </footer>
                </div>
              </div>
            ))
          }
          
        </div>
      </div>
    </div>












  )
}
