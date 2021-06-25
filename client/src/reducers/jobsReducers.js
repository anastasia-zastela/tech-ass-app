import {
  INVITED_JOBS_LIST_FAIL,
  INVITED_JOBS_LIST_REQUEST,
  INVITED_JOBS_LIST_SUCCESS,
  JOBS_LIST_FAIL,
  JOBS_LIST_REQUEST,
  JOBS_LIST_SUCCESS,
} from "../constants/jobsConstants";

export const jobsListReducer = (state = { jobs: [] }, action) => {
  switch (action.type) {
    case JOBS_LIST_REQUEST:
      return {
        loading: true,
        jobs: [],
      };
    case JOBS_LIST_SUCCESS:
      return {
        loading: false,
        jobs: action.payload,
      };
    case JOBS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const invitedJobsListReducer = (state = { invitedJobs: [] }, action) => {
  switch (action.type) {
    case INVITED_JOBS_LIST_REQUEST:
      return {
        loading: true,
        invitedJobs: [],
      };
    case INVITED_JOBS_LIST_SUCCESS:
      return {
        loading: false,
        invitedJobs: action.payload,
      };
    case INVITED_JOBS_LIST_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
