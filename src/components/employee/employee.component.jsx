import React, {useState, useEffect} from 'react';

import {useParams} from 'react-router-dom';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import {selectCurrentEmployees} from '../../redux/employees/employees.selectors';
import {selectCurrentJobs} from '../../redux/jobs/jobs.selectors';
import {selectCurrentLocations} from '../../redux/location/location.selectors';

import {apiCall} from '../../utils/request/request.utils.js';

import {getEmployeeData} from '../../redux/employee/employee.action';

import {likedEmployee} from '../../redux/employee/employee.action';

import {unlikeEmployee} from '../../redux/employee/employee.action';

import {selectCurrentEmployee} from '../../redux/employee/employee.selectors';

import './employee.styles.scss';

import {AiFillLike} from 'react-icons/ai';

const EmployeeComponent = ({jobs, locations, getEmployee, employee, likeEmployeeRed, unlikeEmployeeRed}) => {
  const params = useParams();

  useEffect(()=>{
    apiCall('GET', `/employee/${params.id}`)
      .then((res)=> getEmployee(res))
  },[])

  // function addEntry() {
  //   // Parse any JSON previously stored in allEntries
  //   var existingEntries = JSON.parse(localStorage.getItem("likes"));
  //   if(existingEntries == null) existingEntries = [];
  //   localStorage.setItem("entry", JSON.stringify(employee.id));
  //   existingEntries.push(employee.id);
  //   if(!JSON.parse(localStorage.getItem("likes")).find((e)=>e === employee.id)){
  //     localStorage.setItem("likes", JSON.stringify(existingEntries));
  //   }
  // };

  function likeEmployee(){
    let body = {...employee, liked: employee.liked + 1};

    apiCall('PUT', `/employee/${params.id}`, body)
      .then((res)=> {
        // addEntry()
        likeEmployeeRed(employee)
      })
  }
  //
  // function unlikeEmployee(){
  //   let body = {...employee, liked: employee.liked -1};
  //   const newArray = JSON.parse(localStorage.getItem("likes")).filter(e=>e !== employee.id);
  //   apiCall('PUT', `/employee/${params.id}`, body)
  //     .then((res)=> {
  //       localStorage.setItem("likes", JSON.stringify(newArray))
  //       unlikeEmployeeRed(employee)
  //       console.log(res)
  //     })
  // }

  //ლოქალსთორიჯში ინახება იმ თანამშრომლების აიდი, რომელსაც ალაიქებს იუზერი
  //ლოქალსთორიჯის მიხედვით შეგვიძლია განვსაზღვროთ, იუზერს დალაიქებული აქვს თუ არა მომხმარებელის პროფილი
  //თუ არ აქვს, გამოჩნდება ლაიქის ღილაკი, საპირისპირო შემთხვევაში ანლაიქის ღილაკი.

  //ტექნიკურად ყველაფერი გამართულია, მაგრამ API-ზე PUT request-ის დროს მხოლოდ 1-ით იზრდება(როგორც ჩანს body-ს არ უყურებს)
  //ლაიქების რაოდენობა, დაკლება(ან სხვა მოქმედება) შესაძლებელი არ არის.
  //ამიტომ ერთ იუზერს შეუძლია ბევრი ლაიქის დაწერა

  return <>
    <div className="employee">
      <div className="employee-avatar">
        <img
          className="img_avatar"
          src={`https://test-task-api-optimo.herokuapp.com/${employee.avatar}`}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src="https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1016744034?k=20&m=1016744034&s=612x612&w=0&h=kjCAwH5GOC3n3YRTHBaLDsLIuF8P3kkAJc9RvfiYWBY=";
          }}
          alt=""
        />
      </div>
      <div className="info">
        <div>
          <button onClick={()=> likeEmployee()}><AiFillLike/></button>
          <h4>{employee.liked}</h4>
        </div>
        <h2>{employee.name}</h2>
        <h4><span>Position</span> <br/> {jobs?.filter(e=> e.id == employee.job_id)[0]?.name}</h4>
        <h4><span>Location</span> <br/> {locations?.filter(e=> e.id == employee.location_id)[0]?.name}</h4>
        <h4><span>Description</span> <br/> {employee.description}</h4>
      </div>
    </div>
  </>
}

const mapStateToProps = createStructuredSelector({
  jobs: selectCurrentJobs,
  locations: selectCurrentLocations,
  employee: selectCurrentEmployee
})


const mapDispatchToProps = dispatch => ({
  getEmployee: (employee) => dispatch(getEmployeeData(employee)),
  likeEmployeeRed: (employee) => dispatch(likedEmployee(employee)),
  unlikeEmployeeRed: (employee) => dispatch(unlikeEmployee(employee))
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeComponent)
