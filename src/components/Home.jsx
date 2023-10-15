import React from 'react';
import Nav from './Nav';
import HomeContent from './HomeContent';

const Home = () => {
  return (
    <React.Fragment>
    <main className="d-flex flex-nowrap">
      <Nav />
      <HomeContent />
    </main>
    </React.Fragment>
  );
};

export default Home;
