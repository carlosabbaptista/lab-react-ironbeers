import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Beers() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        // Make an API request to fetch the list of beers
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then((response) => response.json())
            .then((data) => setBeers(data));
    }, []);

    return (
        <div>
            <h1>All Beers</h1>
            {beers.map((beer) => (
                <div key={beer._id}>
                    <img src={beer.image_url} alt={beer.name} />
                    <h2>{beer.name}</h2>
                    <p>{beer.tagline}</p>
                    <p>Contributed by: {beer.contributed_by}</p>
                    <Link to={`/beers/${beer._id}`}>Details</Link>
                </div>
            ))}
        </div>
    );
}

export default Beers;