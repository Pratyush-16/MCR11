import React, { useContext } from 'react'
import { DataContext } from './context/DataContext'
import { Link } from 'react-router-dom';

function MovieCard() {
    const {state:{movieList} } = useContext(DataContext)
    console.log(movieList)


    return (
        <div>

        </div>
    )
}

export default MovieCard
