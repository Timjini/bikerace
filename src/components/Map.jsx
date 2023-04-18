import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import L from 'leaflet';

function Map() {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://serene-castle-01441.herokuapp.com/api/v1/bikers', {
        headers: {
          'Origin': 'https://bikerace-colorado.vercel.app'
          // 'Origin': 'http://localhost:5173'
        }
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (data) {
      setLoader(false);
    }
  }, [data]);

  const icon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <>
      {loader && <div className="loader"></div>}

      <MapContainer center={[40.01, -105.26]} zoom={11} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data &&
          data.map((biker) => (
            <Marker key={biker.id} position={[biker.latitude, biker.longitude]} icon={icon}>
              <Popup>
                {biker.first_name} {biker.last_name} <br />
                {biker.state_of_origin} {biker.city_of_origin} <br />
              </Popup>
            </Marker>
          ))}
      </MapContainer>
    </>
  );
}

export default Map;
