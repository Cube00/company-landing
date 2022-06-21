import React, {useEffect} from 'react';

import {Routes, Route} from 'react-router-dom';

import Home from './pages/home/home.page';

import Layout from './components/layout/layout.component';

import './App.scss';

import {connect} from 'react-redux';

import {getEmployeesData} from './redux/employees/employees.action';

import {apiCall} from './utils/request/request.utils';

function App({employees}) {

  useEffect(()=>{
    apiCall('GET', `/employee`)
      .then((response)=> employees(response))
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
  employees: (employees) => dispatch(getEmployeesData(employees))
})

export default connect(null, mapDispatchToProps)(App);
