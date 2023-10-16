import React from 'react';
import Nav from './Nav';
import HomeContent from './HomeContent';
import NavMob from './NavMob';

const Home = () => {
  return (
    <React.Fragment>
    <main className="d-flex flex-nowrap">
      <Nav />
      <NavMob/>
      <HomeContent />
    </main>
    </React.Fragment>
  );
};

export default Home;
