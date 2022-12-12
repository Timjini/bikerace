import React from 'react';
import Hero from '../components/Hero';
import axios from 'axios';

export default function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios.get('http://localhost:3001/api/v1/bikers')
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