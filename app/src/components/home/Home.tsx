import React from 'react';

import HomeFeed from './HomeFeed';
import SideBar from '../sidebar/SideBar';
import Trends from './Trends';
import './_home.scss';

const Home = () => {
  return (
    <div className="home__container">
      <SideBar />
      <HomeFeed />
      <Trends />
    </div>
  );
};

export default Home;
