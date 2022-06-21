import {employeesTypes} from './employees.types'

const INITIAL_STATE = {
  employees: []
};

const employeesReducer = (state = INITIAL_STATE, action) =>{
  switch (action.type) {
    case employeesTypes.GET_EMPLOYEES_DATA:
      return {
        ...state,
        employees: ['vinme']
      }
    default:
      return state
  }
}

export default employeesReducer
