import React from 'react';
import CreateNavBar from '../components/createNavBar';
import CreateFomeBox from '../components/createFomeBox';

const CreatePage = () => {
  return (
    <>
      <div className="create-container">
        <CreateNavBar />
        <CreateFomeBox />
      </div>
    </>
  );
};

export default CreatePage;
