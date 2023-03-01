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
    <nav className="navbar is-black" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <a className="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/>
    </a>

    
  </div>

  <div id="navbarBasicExample" className="navbar-menu">
    <div className="navbar-start">
      <a className="navbar-item" href='/'>
        Home
      </a>

      <a className="navbar-item" href='/TVShows'>
        TV Shows
      </a>

      <a className="navbar-item" href ='/Movies'>
        
          Movies
        </a>

        <div className="navbar-dropdown">
          <a className="navbar-item">
            About
          </a>
          <a className="navbar-item">
            Jobs
          </a>
          <a className="navbar-item">
            Contact
          </a>
          
          <a className="navbar-item">
            Report an issue
          </a>
        </div>
      
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="buttons">
          <a className="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a className="button is-light" onClick={() => {logout()}}>
            Log Out
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
 )
 }

