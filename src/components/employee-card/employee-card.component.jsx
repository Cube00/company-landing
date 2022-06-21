import React, {useState, useEffect} from 'react';

import './employee-card.styles.scss';

const EmployeeCard = ({jobs, locations, item}) => {
  const {name, avatar, liked, location_id, job_id, top} = item;

  return <>
    <div className={`employee-card${top ? ' top-employee' : ''}`}>
      <div className="image">
        <img src={`https://test-task-api-optimo.herokuapp.com${avatar}`} alt="" />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <h4>{jobs?.filter(e=> e.id == job_id)[0]?.name}</h4>
        <h3>Likes: {liked}</h3>
      </div>
    </div>
  </>
}

export default EmployeeCard
