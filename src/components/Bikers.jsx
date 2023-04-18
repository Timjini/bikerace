import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Bikers() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('https://cors-anywhere.herokuapp.com/https://serene-castle-01441.herokuapp.com/api/v1/bikers', {
        headers: {
          'Origin': 'https://bikerace-colorado.vercel.app'
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

  return (
    <div className="biker__container">
      {data &&
        data.map((biker) => (
          <div key={biker.id}>
            <div className="biker__card">
              <h1>
                {biker.first_name} {biker.last_name}
              </h1>
              <p>City: {biker.city_of_origin}</p>
              <p>State: {biker.state_of_origin}</p>
            </div>
          </div>
        ))}
    </div>
  );
}
