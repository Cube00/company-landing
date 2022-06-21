import {employeesTypes} from './employees.types'

export const getEmployeesData = (employees) => ({
  type: employeesTypes.GET_EMPLOYEES_DATA,
  payload: employees
})

export const sortItems = (employees, state) => ({
  type: employeesTypes.SORT_EMPLOYEES,
  payload: {employees: employees, state: state}
})
