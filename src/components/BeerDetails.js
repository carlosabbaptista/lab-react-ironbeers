// src/components/BeerDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function BeerDetails() {
    const { beerId } = useParams();
    const [beer, setBeer] = useState(null);

    useEffect(() => {
        // Fetch data for the selected beer using beerId
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
            .then((response) => response.json())
            .then((data) => setBeer(data));
    }, [beerId]);

    if (!beer) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <img src={beer.image_url} alt={beer.name} />
            <h1>{beer.name}</h1>
            <p>{beer.tagline}</p>
            <p>First Brewed: {beer.first_brewed}</p>
            <p>Attenuation Level: {beer.attenuation_level}</p>
            <p>{beer.description}</p>
            <p>Contributed by: {beer.contributed_by}</p>
        </div>
    );
}

export default BeerDetails;