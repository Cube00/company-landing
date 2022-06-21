import {createSelector} from 'reselect';

const selectJobs = state => state.jobs;

export const selectCurrentJobs = createSelector(
  [selectJobs],
  (jobs)=> jobs.jobs
)
