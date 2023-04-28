import React from "react";
import Home from "./Home";

// this is the Footer of the application, this is a reacurring compinent that is part of the page layout and is displayed on each page
// providing additional navigationa and information to the user

export default function Footer() {
    return (
        <footer className="footer has-background-black">
  <div className="content has-text-centered has-background-black">
    <p>
      <strong>WV</strong> by <a href='/'>WebVideo</a>.
      
      
    </p>
  </div>
</footer>
    )

}
