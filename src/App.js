import React, {useEffect} from 'react';

import {Routes, Route} from 'react-router-dom';

import Home from './pages/home/home.page';

import Layout from './components/layout/layout.component';

import './App.scss';

import {connect} from 'react-redux';

import {getEmployeesData} from './redux/employees/employees.action';

import {requestFunc} from './utils/request/request.utils';

function App({emplyees}) {

  useEffect(()=>{
    requestFunc('GET', 'https://test-task-api-optimo.herokuapp.com/employee')
      .then((response)=> console.log(response, 'this is response'))
      .catch(err=> console.log(err))
    emplyees('employee 1')
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
  emplyees: (employees) => dispatch(getEmployeesData(employees))
})

export default connect(null, mapDispatchToProps)(App);
