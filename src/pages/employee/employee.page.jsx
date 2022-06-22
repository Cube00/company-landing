import React, {useEffect} from 'react';

import EmployeeComponent from '../../components/employee/employee.component';

const Employee = () => {

  useEffect(()=>{
    if(localStorage.getItem('likes') == undefined){
      localStorage.setItem('likes', JSON.stringify([]))
    }
  },[])

  return <>
    <EmployeeComponent />
  </>
}

export default Employee;
