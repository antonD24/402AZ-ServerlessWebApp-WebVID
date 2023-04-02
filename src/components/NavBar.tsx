import React from 'react';
import {Auth} from 'aws-amplify';





export default function NavBar(){
    
  
  const logout = () => {
    try{
      Auth.signOut();
    }
    catch (e: any){
      console.log(e)
    }
  }
  
    return (
    <nav className="navbar has-background-success-dark" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-image" href="/">
      <img src="https://webvideo-402.s3.amazonaws.com/Logos/navbarlogo.PNG" width="50" height="20"/>
    </a>

    
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item has-text-white has-background-success-dark" href='/'>
        Home
      </a>

      <a className="navbar-item has-text-white has-background-success-dark" href='/TVShows'>
        TV Shows
      </a>

      <a className="navbar-item has-text-white has-background-success-dark" href ='/Movies'>
        
          Movies
        </a>

        
          <a className="navbar-item has-text-white has-background-success-dark" href='/Listings'  >
            Listings
          </a>
          
        
      
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button has-background-warning-dark is-warning has-text-white" href='/Feedback'>
            <strong>Feedback</strong>
          </a>
          <a className="button has-text-white has-background-danger-dark is-danger" onClick={() => {logout()}}>
            Log Out
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
 )
 }

