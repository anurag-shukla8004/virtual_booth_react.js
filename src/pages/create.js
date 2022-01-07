import React from 'react';
import CreateNavBar from '../components/createNavBar';
import CreateFomeBox from '../components/createFomeBox';
import Header from '../components/header';

const CreatePage = () => {
  return (
    <>
      <div className="create-container">
        <Header />
        <CreateNavBar />
        <CreateFomeBox />
      </div>
    </>
  );
};

export default CreatePage;
