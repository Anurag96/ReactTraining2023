import { SUBMIT_ENQUIRY_SUCCESS, SUBMIT_ENQUIRY_FAILURE } from '../actions/enquiryActions';

const initialState = {
  enquiries: [],
  error: '',
};

const enquiryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_ENQUIRY_SUCCESS:
      return {
        ...state,
        enquiries: [...state.enquiries, action.payload],
        error: '',
      };
    case SUBMIT_ENQUIRY_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default enquiryReducer;
