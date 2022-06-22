import { combineReducers } from 'redux'

import employeesReducer from './employees/employees.reducer'

import locationReducer from './location/location.reducer'

import jobsReducer from './jobs/jobs.reducer'

import employeeReducer from './employee/employee.reducer'

const rootReducer = combineReducers({
  employees: employeesReducer,
  locations: locationReducer,
  jobs: jobsReducer,
  employee: employeeReducer
});

export default rootReducer
