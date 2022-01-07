import React from 'react';
import { Dropdown } from './dropdown';
import Button from './button';
import adminJson from '../json_data/adminDropdownJSON.json';
import selifeBoothJson from '../json_data/selfiBoothDropdownJSON.json';
import Header from '../components/header';
import { useNavigate } from 'react-router';

function SideBar() {
  const navigate = useNavigate();
  const switchRoute = (e) => {
    console.log(e.target.value);
    navigate(e.target.value);
  };
  console.log('*******************Home****************');
  return (
    <>
      <div className="dropdown-wrapper">
        <Dropdown data={adminJson} onCall={switchRoute} />
        <Button title={'EVENTS'} />
        <Dropdown data={selifeBoothJson} onCall={switchRoute} />
        <Button title={'GALLERY'} />
        <Button title={'TEMPLATES'} />
        <Button title={'REPORTS'} />
        <Button title={'SETTIINGS'} />
      </div>
    </>
  );
}

export default SideBar;
