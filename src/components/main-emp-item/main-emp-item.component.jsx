import React from 'react';

import './main-emp-item.styles.scss';

const MainEmpItem = ({jobs, locations, item, index}) =>{

  const {name, location_id, job_id, description, liked, id} = item;

  const location = locations?.filter(e=> e.id == location_id)[0];
  const job = jobs?.filter(e=> e.id == job_id)[0]

  return <>
    <div className="main-card">
      <h2>0{index}.</h2>
      <h2>{name}</h2>
      <h2>{location?.name}</h2>
      <h2>{job?.name}</h2>
      <h2>likes: {liked}</h2>
    </div>
  </>
}

export default MainEmpItem;
