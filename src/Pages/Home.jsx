import React, {useEffect, useState} from 'react';
import Hero from '../components/Hero';
import Counter from '../components/Counter';
import Carousel from '../components/Carousel';
import CTA from '../components/CTA';
import Gallery from '../components/Gallery';
import Map from '../components/Map';

export default function Home() {


  return (
    <div>
      <Hero />
      <Counter />
      <Gallery />
      <Map />
      <CTA />
    </div>
  );
}