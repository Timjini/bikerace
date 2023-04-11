import React,{useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import L from 'leaflet';


function Map() {
    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(true);

    //load the map after the data is loaded

    useEffect (() => {
      if (data) {
        setLoader(false);
      }
    }, [data]);


    async function getData() {
      const res = axios ({
        method: 'get',
          url: 'https://serene-castle-01441.herokuapp.com/api/v1/bikers',
        headers: {
          'Access-Control-Allow-Origin': 'https://serene-castle-01441.herokuapp.com/api/v1/bikers',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
      })  

      .then((res) => {
        setData(res.data.incidents);
      })

    }

    useEffect(() => {
      getData();
    }, []);

  
  //L icon for marker
  const icon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  
  
  
    return (
      <>
      {loader && <div className="loader"></div>}
      
      <MapContainer center={[40.01, -105.26]} zoom={11} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {data && data.map((biker) => (
            <Marker key={biker.id} position={[biker.latitude, biker.longitude]} icon={icon} >
            <Popup>
              {biker.first_name} {biker.last_name} <br />
              {biker.state_of_origin} {biker.city_of_origin} <br />

            </Popup>
          </Marker>
          ))}
      </MapContainer>
            
      </>
    )
  }

export default Map