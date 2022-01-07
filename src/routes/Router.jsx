import React from 'react';
import { Route, Routes} from 'react-router-dom';
import AllPage from '../pages/all';
import CreatePage from '../pages/create';
import Home from '../pages/home';


const Router = () => {
  return (
    <>
    <Routes>
       <Route exact path="/" element={<Home />}  />
     <Route path="/create" element={<CreatePage />} />
     <Route path="/all"element={<AllPage />}/>
    </Routes>
    
    </>
  )
}

export default Router
