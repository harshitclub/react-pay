import React from 'react'
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>404</h1>
          </div>
          <h2>The Page You Are Trying To Reach Is Not Exist...</h2>
          <p>
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAME
            CHANGED OR IS TEMPORARILY UNAVAILABLE.
          </p>
          <NavLink to="/">Home</NavLink>
        </div>
      </div>
    </>
    )
}

export default ErrorPage
