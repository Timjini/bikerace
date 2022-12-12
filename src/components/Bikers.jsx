import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Bikers() {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      axios.get('https://fierce-badlands-13020.herokuapp.com/api/v1/bikers')
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        });
    }, []);
  
  
    return (
      <div className='biker__container'>
      {data && data.map((biker) => (
        <div key={biker.id}>
          <div className="biker__card">
            <h1>{biker.first_name} {biker.last_name}</h1>
            <p> City : {biker.city_of_origin}</p>
            {biker.state_of_origin}
          </div>
        </div>
      ))}
  
      </div>
    );
  }