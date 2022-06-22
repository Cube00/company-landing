import React, {useEffect} from 'react';

import {Routes, Route} from 'react-router-dom';

import Layout from './components/layout/layout.component';

import Home from './pages/home/home.page';

import Employees from './pages/employees/employees.page';

import Feedback from './pages/feedback/feedback.page';

import Employee from './pages/employee/employee.page';

import './App.scss';

import {connect} from 'react-redux';

import {getEmployeesData} from './redux/employees/employees.action';

import {getLocationData} from './redux/location/location.action'

import {getJobsData} from './redux/jobs/jobs.action'

import {apiCall} from './utils/request/request.utils';

import EmployeeComponent from './components/employee/employee.component';

function App({getEmployees, getLocation, getJobs}) {

  useEffect(()=>{
    apiCall('GET', `/employee`)
      .then((response)=> getEmployees(response))
      .catch(err=> console.log(err))
  },[])

  useEffect(()=>{
    apiCall('GET', `/location`)
      .then((response)=> getLocation(response))
      .catch(err=> console.log(err))
  },[])

  useEffect(()=>{
    apiCall('GET', `/job`)
      .then((response)=> getJobs(response))
      .catch(err=> console.log(err))
  },[])

  return <>
    <Routes>
      <Route element={<Layout/>}>
        <Route exact path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/employees/:id" element={<Employee />} />
      </Route>
    </Routes>
  </>
}

const mapDispatchToProps = dispatch => ({
  getEmployees: (employees) => dispatch(getEmployeesData(employees)),
  getLocation: (locations) => dispatch(getLocationData(locations)),
  getJobs: (jobs) => dispatch(getJobsData(jobs))
})

export default connect(null, mapDispatchToProps)(App);
