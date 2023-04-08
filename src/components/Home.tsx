import React from "react";

export default function Home() {
    return (
        <div className="has-background-black">


            <div className="container has-background-dark">
                <h1 className="title is-1"></h1>
                <h1 className="title is-1"></h1>
                <div className="box has-background-black">

                    <h1 className="title is-1 has-text-white">Home</h1>


                </div>

                <div className="section has-background-gray">

                    <div className="columns is-multiline">

                        
                        <div className="column is-half mt-6">
                        <div className="box has-background-black">
                        
                        <p className="has-text-white mt-5">
                        Web Video is an open-source streaming platform providing users with a unified streaming platform where they can enjoy all of their favourite content in one place.
                        </p>

                        <p className="has-text-white ml-5">
                        As of right now, the platform is in its infancy, and we, as the developers, need the help of the community and our users in order to polish and deliver a great experience.
                        </p>

                        
                        <p className="has-text-white ml-6">
                        Welcome to WV, and we hope to grow together and experience beautifully crafted stories.
                        </p>



                        </div>


                        </div>

                        <div className="column is-half has-text-centered">
                            <div className="box has-background-black">
                            <img src="https://webvideo-402.s3.amazonaws.com/Logos/fulllogo.PNG"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}