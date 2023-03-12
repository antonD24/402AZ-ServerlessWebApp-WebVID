/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Itv from "./types/TVtypes";
import MyApp from "./Carousel/Capp";
import ShowsServices from "../services/ShowsServices";
import tvshow from "./tvshow";

export default function TVShows() {
  const [TVShows, setTVShow] = useState<Array<Itv>>([]);
  const getTVShow = () => {
    ShowsServices.getAll()
      .then((response: any) => {
        setTVShow(response.data.Items);
        console.log(response.data.Items);
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
        <h1 className="title"> </h1>
        <h1 className="title is-1">TV Shows</h1>
        <h2 className=""></h2>
        <div><MyApp></MyApp></div>
      </div>
      <div className="section">
        <div className="columns is-multiline">
          {
            TVShows.map((tvshow, index) => (
              <div className="column is-one-third has-background-backgrounddark">
                <div className="card is-bacground">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src="https://m.media-amazon.com/images/I/A16HuooO3IL._AC_SL1500_.jpg"></img>


                    </figure>

                  </div>
                  <Link to={{ pathname: `/items/${tvshow.id}` }}>
                    <button className="button is-link is-centre">Watch Now</button>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>








  )
}
