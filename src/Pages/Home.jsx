import React, {useEffect, useState} from 'react';
import Hero from '../components/Hero';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://fierce-badlands-13020.herokuapp.com/api/v1/bikers')
      .then((response) => {
        setData(response.data);
      });
  }, []);


  return (
    <div>
      <Hero />
    {data && data.map((biker) => (
      <div key={biker.id}>
        <h1>{biker.first_name}</h1>
        </div>
    ))}

    </div>
  );
}