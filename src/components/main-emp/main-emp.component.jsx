import React from 'react';

import {connect} from 'react-redux';

import {createStructuredSelector} from 'reselect';

import './main-emp.styles.scss';

import {selectCurrentEmployees} from '../../redux/employees/employees.selectors';
import {selectCurrentJobs} from '../../redux/jobs/jobs.selectors';
import {selectCurrentLocations} from '../../redux/location/location.selectors';

import MainEmpItem from '../main-emp-item/main-emp-item.component';

import {Link} from 'react-router-dom';

const MainEmployees = ({employees, jobs, locations}) =>{
  return <>
    <div className="mainemployees">
      <div className="emp-stats">
        <h2>{employees?.length} <br /> <span>EMPLOYEES</span></h2>
        <h2>{jobs?.length} <br /> <span>POSITIONS</span></h2>
        <h2>{locations?.length} <br /> <span>LOCATIONS</span></h2>
      </div>

      <div className="emp-ex">
        <div className="emp-cont">
          <div className="emp-title">
            <h1>EMPLOYEES</h1>
            <h2>GET YOUR IDEAL WEB DEVELOPMENT SOLUTION.</h2>
            <Link to="/employees"><button>ALL EMPLOYEES</button></Link>
          </div>
          <div className="emp">
            {
              employees?.map(value => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value)
                    .filter((_,i)=> i<4)
                    .map((item, index)=>{
                      return <MainEmpItem key={item.id} jobs={jobs} locations={locations} item={item} index={index + 1} />
                    })
            }
          </div>
        </div>
      </div>
    </div>
  </>
}

const mapStateToProps = createStructuredSelector({
  employees: selectCurrentEmployees,
  jobs: selectCurrentJobs,
  locations: selectCurrentLocations
})

export default connect(mapStateToProps)(MainEmployees)
