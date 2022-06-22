import {employeeTypes} from './employee.types'

export const getEmployeeData = (employee) => ({
  type: employeeTypes.GET_EMPLOYEE_DATA,
  payload: employee
})

export const likedEmployee = (employee) => ({
  type: employeeTypes.LIKE_EMPLOYEE,
  payload: employee
})

export const unlikeEmployee = (employee) => ({
  type: employeeTypes.UNLIKE_EMPLOYEE,
  payload: employee
})
