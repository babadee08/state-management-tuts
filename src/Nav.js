import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

function Nav() {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <div>
            <header>
                <h4>Babadee08</h4>
                <h6>Number of movies = {movies.length}</h6>
            </header>
        </div>
    )
}

export default Nav;
