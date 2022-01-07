import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';
import Sidebar from '../components/sideBar';
import Menubar from '../components/menuBar';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="bar-container">
        <Sidebar />
        <Menubar />
      </div>
    </div>
  );
};

export default Home;
