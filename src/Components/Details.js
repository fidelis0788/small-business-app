import { useState, useEffect } from 'react';
import { Container } from '@material-ui/core';
import GoogleMap from '../Components/GoogleMap';

const Details = (props) => {
  const id = props.match.params.id;
  const selectedListing = props.listings.find(listing => listing.id.toString()=== id);

  const [latt, setLatt] = useState(30.264115);
  const [long, setLong] = useState(-97.732655);

  useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${selectedListing.address}&key=${process.env.REACT_APP_MAP_API_KEY}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setLatt(data.results[0].geometry.location.lat);
        setLong(data.results[0].geometry.location.lng);
      })
      .catch(error => {
        console.log(error);
      })
  });

  return (
    <div>
      <Container maxWidth="xs">
        <h2>{selectedListing.name}</h2>
        <h3>{selectedListing.address}</h3>
        <h3>{selectedListing.hours}</h3>
        <p>{selectedListing.description}</p>
        <GoogleMap latt={latt} long={long} listingName={selectedListing.name} />
      </Container>
    </div>
  )
}

export default Details;
