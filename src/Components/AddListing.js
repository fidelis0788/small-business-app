import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {v4 as uuid} from 'uuid';
import { Container, TextField, Button } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import LocationPin from './pin';
const AddListing = (props) => {
  const [id, setId] = useState(0);
  const [newListing, setNewListing] = useState({});

  let history = useHistory();

  const handleTextChange = (e) => {
    setId(uuid());
    setNewListing({ ...newListing, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const listing = {id, ...newListing}
    props.addListing(listing);
    history.push("./listings");
  }

  return (
    <div>
      <Container maxWidth="sm">
          <form className="add-form" onSubmit={handleSubmit}>
            <TextField 
              placeholder="Name" 
              type="text" name="name" 
              value={newListing.name} 
              onChange={handleTextChange} 
            />
            <TextField 
              placeholder="Address" 
              type="text" 
              name="address" 
              value={newListing.address} 
              onChange={handleTextChange} 
            />
            <TextField 
              placeholder="Hours (ex: 8AM - 9PM)" 
              type="text" 
              name="hours" 
              value={newListing.hours} 
              onChange={handleTextChange} 
            />
            <TextField 
              placeholder="Description" 
              type="text" 
              name="description" 
              value={newListing.description} 
              onChange={handleTextChange} 
            />
            <br />
            <Button variant="contained" color="" type="submit">SAVE</Button>
            
          </form>
        </Container>
    

<div style={{ height: '50vh', width: '100%' }}>
<GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAVidt5PegPAUP9G8b8QSECsr1BqD8HbEE" }}
        defaultCenter={{lat: props.latt, lng: props.long}}
        defaultZoom={11}
      >
        <LocationPin
          lat={props.latt}
          lng={props.long}
        />
      </GoogleMapReact>
    </div>
</div>
  )
}

export default AddListing;