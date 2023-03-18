/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Itv from "./types/TVShows";
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
      </section>

      <section>
        {
          TVShows.map((TVShows, index) => (





            <div className="columns">



              <div className="column">
                <div className="card">


                  <div className="card-image">
                    <figure className="image">

                      
                      <img>src= {TVShows.Image}</img>



                    </figure>

                  </div>


                  <div className="card">
                    <div className="card-content">
                      <div className="content">
                        <div>
                            <p>{TVShows.ShowName}</p>
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

          ))
        }

      </section>



    </div>








  )
}
