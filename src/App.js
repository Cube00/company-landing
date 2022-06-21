import React, {useEffect} from 'react';

import {Routes, Route} from 'react-router-dom';

import Home from './pages/home/home.page';

import Layout from './components/layout/layout.component';

import './App.scss';

import {connect} from 'react-redux';

import {getEmployeesData} from './redux/employees/employees.action';

import {getLocationData} from './redux/location/location.action'

import {getJobsData} from './redux/jobs/jobs.action'

import {apiCall} from './utils/request/request.utils';

function App({getEmployees, getLocation, getJobs}) {

  useEffect(()=>{
    apiCall('GET', `/employee`)
      .then((response)=> getEmployees(response))
      .catch(err=> console.log(err))

    apiCall('GET', `/location`)
      .then((response)=> getLocation(response))
      .catch(err=> console.log(err))

    apiCall('GET', `/job`)
      .then((response)=> getJobs(response))
      .catch(err=> console.log(err))
  },[])

  return <>
    <Routes>
      <Route element={<Layout/>}>
        <Route exact path="/" element={<Home />} />
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
