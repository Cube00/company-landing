import React, {useState, useEffect} from 'react';

import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux';

import {selectCurrentEmployees} from '../../redux/employees/employees.selectors';
import {selectCurrentJobs} from '../../redux/jobs/jobs.selectors';
import {selectCurrentLocations} from '../../redux/location/location.selectors';

import {sortItems} from '../../redux/employees/employees.action';

import Filter from '../../components/filter/filter.component';

import './employees.styles.scss';

const Employees = ({employees, jobs, locations}) =>{
  const [state, setState] = useState([]);

  useEffect(()=>{
    setState(employees)
  },[employees, jobs, locations])

  return <>
    <div className="employees-page">
      <Filter state={state} setState={setState} />

      {state?.map((e)=>{
        return <>heeii</>
      })}
    </div>
  </>
}

const mapStateToProps = createStructuredSelector({
  employees: selectCurrentEmployees,
  jobs: selectCurrentJobs,
  locations: selectCurrentLocations
})

export default connect(mapStateToProps)(Employees);
