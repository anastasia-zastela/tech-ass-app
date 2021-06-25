import axios from "axios";
import { BASE_URL } from "../constants/urlConstant";
import {
  INVITED_JOBS_LIST_FAIL,
  INVITED_JOBS_LIST_REQUEST,
  INVITED_JOBS_LIST_SUCCESS,
  JOBS_LIST_FAIL,
  JOBS_LIST_REQUEST,
  JOBS_LIST_SUCCESS,
} from "../constants/jobsConstants";

export const listAllJobs = (dateToFilter) => async (dispatch) => {
  try {
    dispatch({
      type: JOBS_LIST_REQUEST,
    });

    const { data } = await axios.get(`${BASE_URL}/api/jobs`, {
      params: {
        dateToFilter: dateToFilter,
      },
    });

    dispatch({
      type: JOBS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: JOBS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listInvitedJobs = () => async (dispatch) => {
  try {
    dispatch({
      type: INVITED_JOBS_LIST_REQUEST,
    });

    const { data } = await axios.get(`${BASE_URL}/api/jobs`, {
      params: {
        invitationFilterParam: "invitationStatus",
      },
    });

    dispatch({
      type: INVITED_JOBS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: INVITED_JOBS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
