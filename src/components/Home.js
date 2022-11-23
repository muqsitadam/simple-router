import React from "react";
import { Link } from "react-router-dom";

function Home () {
    return(
      <div className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 md:h-screen'>
        <nav>
            <Link className="text-gray-300 font-medium p-5 text-2xl" to='/signin'>Signin</Link>
            <Link className="text-gray-300 font-medium p-5 text-2xl" to='/register'>Register</Link>
        </nav>
        <div className="flex flex-row justify-center items-center">
            <h1 className="text-3xl text-white font-bold mt-10">Holla, Welcomente</h1>
        </div> 
      </div>
    )
}

export default Home