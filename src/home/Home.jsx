import { HomeRounded } from '@material-ui/icons';
import React from 'react';
import Navbar from '../components/navbar/Navbar';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <img
        width="100%"
        src="https://media.sohuutritue.net.vn/files/huongmi/2022/05/17/netflix-logo-2219.jpg"
        alt="netflix"
      />
    </div>
  );
};

export default Home;
