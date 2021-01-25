import React from 'react';
import GoogleMapReact from 'google-map-react';
import LocationPin from './pin';

class GoogleMap extends React.Component {
  render() {
  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAVidt5PegPAUP9G8b8QSECsr1BqD8HbEE" }}
        defaultCenter={{lat: this.props.latt, lng: this.props.long}}
        defaultZoom={10}
      >
        <LocationPin
          lat={this.props.latt}
          lng={this.props.long}
        />
      </GoogleMapReact>
    </div>
  );
}
}
 
export default GoogleMap;