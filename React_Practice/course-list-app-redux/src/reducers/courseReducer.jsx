import { FETCH_COURSES_SUCCESS, FETCH_COURSES_FAILURE } from '../actions/courseAction';

const initialState = {
  courses: [],
  error: '',
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.payload,
        error: '',
      };
    case FETCH_COURSES_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default courseReducer;
