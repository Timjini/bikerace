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
      <div>
      {data && data.map((biker) => (
        <div key={biker.id}>
          <h1>{biker.first_name}</h1>
        </div>
      ))}
  
      </div>
    );
  }