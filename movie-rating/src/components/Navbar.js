import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {

  return (
    <div className=" bg-slate-500 flex flex items-center justify-between p-5">

        <div>
            <h2 className='text-2xl font-bold text-white'>IMDB</h2>
        </div>


        <div>
        <input
            type="search"
            placeholder="Search"
            aria-label="Search"
            className="p-[2px] px-2"
      />
        </div>
       


      <div className="flex gap-4 text-white">
        <NavLink to={"/"} className>
          Movies
        </NavLink>
        <NavLink to={"/watchlist"} className>
          Watchlist
        </NavLink>
        <NavLink to={"/starred"} className>
          Starred
        </NavLink>
       </div>
 
    
      
    </div>
  )
}

export default Navbar
