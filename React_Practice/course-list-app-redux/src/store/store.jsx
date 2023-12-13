import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
import courseReducer from '../reducers/courseReducer';
import enquiryReducer from '../reducers/enquiryReducer';

const rootReducer = combineReducers({
  courseReducer,
  enquiryReducer,
});

const store = createStore(rootReducer);

export default store;
