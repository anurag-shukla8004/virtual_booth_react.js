import React from 'react';
import CreateNavBar from '../components/createNavBar';
import CreateFomeBox from '../components/createFomeBox';
import Header from '../components/header';
import Sidebar from '../components/sideBar';

const CreatePage = () => {
  return (
    <>
      <div className="create-container">
        <Header />
        <CreateNavBar />
        <div className="sideBar-createFomeBox">
          <Sidebar />
          <CreateFomeBox />
        </div>
      </div>
    </>
  );
};

export default CreatePage;
