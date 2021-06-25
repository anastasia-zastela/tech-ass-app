import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  jobsListReducer,
  invitedJobsListReducer,
} from "./reducers/jobsReducers";

const reducer = combineReducers({
  jobsList: jobsListReducer,
  invitedJobsList: invitedJobsListReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
