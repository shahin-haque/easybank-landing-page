import React from 'react';
import Hero from '../components/Hero';
import LatestArticles from '../components/LatestArticles';
import Service from '../components/Service';

const Home = () => {
  return (
    <main>
      <Hero />
      <Service />
      <LatestArticles />
    </main>
  );
};

export default Home;
