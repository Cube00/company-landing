import {jobTypes} from './jobs.types'

const INITIAL_STATE = {
  jobs: []
};

const jobsReducer = (state = INITIAL_STATE, action) =>{
  switch (action.type) {
    case jobTypes.GET_JOBS_DATA:
      return {
        ...state,
        jobs: action.payload
      }
    default:
      return state
  }
}

export default jobsReducer
