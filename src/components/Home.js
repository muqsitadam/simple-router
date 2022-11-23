import React from "react";
import { Link } from "react-router-dom";

function Home () {
    return(
      <div>
        <nav>
            <Link to='/signin'>Signin</Link>
            <Link to='/register'>Register</Link>
        </nav>
        <h1 className="text-3xl font-bold">Holla, Welcomente</h1>
      </div>
    )
}

export default Home