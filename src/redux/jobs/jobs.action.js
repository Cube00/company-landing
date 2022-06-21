import {jobTypes} from './jobs.types'

export const getJobsData = (jobs) =>({
    type: jobTypes.GET_JOBS_DATA,
    payload: jobs
})
