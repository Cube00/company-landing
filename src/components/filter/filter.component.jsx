import React, {useState, useEffect} from 'react';

import {createStructuredSelector} from 'reselect';

import {connect} from 'react-redux';

import {selectCurrentEmployees} from '../../redux/employees/employees.selectors';
import {selectCurrentJobs} from '../../redux/jobs/jobs.selectors';
import {selectCurrentLocations} from '../../redux/location/location.selectors';

import LocationFilter from './location.filter';
import JobsFilter from './jobs.filter';

import './filter.styles.scss';

const Filter = ({state, setState, employees, jobs, locations}) =>{
  const [sort, setSort] = useState(false);
  const [jobContent, setJobContent] = useState({
    id: null,
    name: 'All',
    drop: false
  })
  const [locationContent, setLocationContent] = useState({
    id: null,
    name: 'All',
    drop: false
  })

  function filterFunc() {
    const newItem = employees?.filter(item => {
      if(jobContent.name !== 'All'){
        return item.job_id == jobContent.id
      }else {
        return item
      }
    }).filter(item => {
      if(locationContent.name !== 'All'){
        return item.location_id == locationContent.id
      }else {
        return item
      }
    })

    if(sort) {
      setState(newItem.sort((a,b)=>b.liked - a.liked).map((item,i)=>{
        if(i < 3) {
          return {...item, top: true}
        } else {
          return item
        }
      }))
    }else {
      setState(newItem)
    }
  }

  useEffect(()=>{
    filterFunc()
  },[jobContent, locationContent, sort])

  return <>
    <div className="filter-box">
      <button className={`sort${sort ? ' active' : ''}`} onClick={()=> {filterFunc(); setSort(!sort)}}>sort</button>
      <div className="filter-tools">
        <div className="location-dropdown">
          <button className="drop-btn" onClick={()=> setLocationContent((prev)=>({...prev, drop: !prev.drop}))}>{locationContent.name}</button>
          <LocationFilter locations={locations} filterFunc={filterFunc} setLocationContent={setLocationContent} locationContent={locationContent} />
        </div>
        <div className="jobs-dropdown">
          <button className="drop-btn" onClick={()=> setJobContent((prev)=>({...prev, drop: !prev.drop}))}>{jobContent.name}</button>
          <JobsFilter jobs={jobs} filterFunc={filterFunc} setJobContent={setJobContent} jobContent={jobContent} />
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

export default connect(mapStateToProps)(Filter);
