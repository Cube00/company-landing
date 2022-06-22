import {employeesTypes} from './employees.types'

export const getEmployeesData = (employees) => ({
  type: employeesTypes.GET_EMPLOYEES_DATA,
  payload: employees
})
