import React,{useEffect, useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';


function Map() {
    const [data, setData] = useState(null);

    useEffect(() => {
      axios.get('https://fierce-badlands-13020.herokuapp.com/api/v1/bikers')
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        });
    }, []);
  
  
  
  
  
    return (
      <><MapContainer center={[40.01, -105.26]} zoom={12} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {data && data.map((biker) => (
            <Marker key={biker.id} position={[biker.latitude, biker.longitude]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          ))}
      </MapContainer>
            
      </>
    )
  }

export default Map