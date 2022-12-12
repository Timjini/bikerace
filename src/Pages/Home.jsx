import React, {useEffect, useState} from 'react';
import Hero from '../components/Hero';
import Counter from '../components/Counter';
import Carousel from '../components/Carousel';

export default function Home() {


  return (
    <div>
      <Hero />
      <Counter />
      <Carousel />
    </div>
  );
}