import {employeeTypes} from './employee.types';

const INITIAL_STATE = {
  employee: []
};

const employeeReducer = (state = INITIAL_STATE, action) =>{
  switch (action.type) {
    case employeeTypes.GET_EMPLOYEE_DATA:
      return {
        ...state,
        employee: action.payload
      }
    case employeeTypes.LIKE_EMPLOYEE:
      return {
        ...state,
        employee: {...action.payload, liked: action.payload.liked + 1}
      }
    case employeeTypes.UNLIKE_EMPLOYEE:
      return {
        ...state,
        employee: {...action.payload, liked: action.payload.liked - 1}
      }
    default:
      return state
  }
}

export default employeeReducer
