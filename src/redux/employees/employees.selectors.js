import {createSelector} from 'reselect';

const selectEmployees = state => state.employees;

export const selectCurrentEmployees = createSelector(
  [selectEmployees],
  (employees)=> employees.employees.sort((a,b)=> b.id - a.id)
)
