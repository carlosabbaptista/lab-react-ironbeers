import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import beersImage from './assets/beers.png';
import randomBeerImage from './assets/random-beer.png';
import newBeerImage from './assets/new-beer.png';

function App() {
  const [beers, setBeers] = useState([]);

  // Fetch beers from the API when the component mounts
  useEffect(() => {
    fetch('https://ih-beers-api2.herokuapp.com/beers')
      .then((response) => response.json())
      .then((data) => setBeers(data));
  }, []);

  return (
    <div className="Home">
      <Link to="/beers">
        <img src={beersImage} alt="All Beers" />
      </Link>
      <h2>All Beers</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus lobortis molestie. In ipsum dui, facilisis a orci a, facilisis pellentesque dolor. Maecenas elit libero, tincidunt in nisl vel, maximus dignissim ipsum. Nullam at erat efficitur, egestas orci nec, lacinia dui. Proin fringilla purus eros, ut fringilla nunc volutpat sed.</p>
      {/* Map over the beers and display them */}
      <div className="beer-list">
        {beers.map((beer) => (
          <div className="beer-card" key={beer._id}>
            <img src={beer.image_url} alt={beer.name} />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>Contributed by: {beer.contributed_by}</p>
            <Link to={`/beers/${beer._id}`}>Details</Link>
          </div>
        ))}
      </div>

      {/* Links to other pages */}
      <Link to="/random-beer">
        <img src={randomBeerImage} alt="Random Beer" />
      </Link>
      <h2>Random Beer</h2>
      <p>Proin vitae pharetra dui. Sed ac placerat nulla, et rhoncus lorem. Cras consectetur turpis lobortis consequat mollis. Vestibulum mi enim, venenatis nec rutrum non, ultricies eu nibh. Nulla facilisi. Nulla vel ex et arcu maximus convallis. Vestibulum sit amet nibh est. Donec dapibus leo mi, eget gravida felis faucibus vel.</p>
      <Link to="/new-beer">
        <img src={newBeerImage} alt="New Beer" />
      </Link>
      <h2>New Beer</h2>
      <p>Etiam interdum sit amet augue eu bibendum. Sed egestas ut nibh pulvinar scelerisque. Maecenas at nisi at nisl euismod efficitur pellentesque at odio. Praesent quis quam at augue vestibulum viverra. Morbi cursus vel mauris eu tempus. Proin aliquet mi egestas, pretium nibh quis, viverra massa. Aenean at tempor quam. Donec.</p>
    </div>
  );
}

export default App;