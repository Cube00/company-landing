import {employeesTypes} from './employees.types';

import {sortedItems} from './employees.utils';

const INITIAL_STATE = {
  employees: []
};

const employeesReducer = (state = INITIAL_STATE, action) =>{
  switch (action.type) {
    case employeesTypes.GET_EMPLOYEES_DATA:
      return {
        ...state,
        employees: action.payload
      }
    case employeesTypes.SORT_EMPLOYEES:
      return {
        ...state,
        employees: sortedItems(action.payload.employees, action.payload.state)
      }
    default:
      return state
  }
}

export default employeesReducer
