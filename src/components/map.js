import React, {Component} from 'react'

import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '10%',
    height: '10%'
  };

  export class MapContainer extends Component {
    render() {
      return (
        <div className="flex">
            <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={
            {
              lat: -1.2884,
              lng: 36.8233
            }
          }
        />
        </div>
      );
    }
  }
  
  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDengnRdjVNe-z-hBB29IaOhOIpPeldbXA'
  })(MapContainer);

