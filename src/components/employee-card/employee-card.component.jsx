import React, {useState, useEffect} from 'react';

import './employee-card.styles.scss';

import {Link} from 'react-router-dom';

const EmployeeCard = ({jobs, locations, item}) => {
  const {name, avatar, liked, location_id, job_id, top, id} = item;

  return <>
      <div className={`employee-card${top ? ' top-employee' : ''}`}>
        <Link to={`/employees/${id}`}>
          <div className="image">
            <img
              className="img_avatar"
              src={`https://test-task-api-optimo.herokuapp.com${avatar}`}
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src="https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034?k=20&m=1016744034&s=612x612&w=0&h=kjCAwH5GOC3n3YRTHBaLDsLIuF8P3kkAJc9RvfiYWBY=";
              }}
              alt=""
            />
          </div>
          <div className="info">
            <h2>{name}</h2>
            <h4>{jobs?.filter(e=> e.id == job_id)[0]?.name}</h4>
            <h4>{locations?.filter(e=> e.id == location_id)[0]?.name}</h4>
            <h3>Likes: {liked}</h3>
          </div>
        </Link>
      </div>
  </>
}

export default EmployeeCard
