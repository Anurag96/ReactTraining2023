import axios from 'axios';

export const SUBMIT_ENQUIRY_SUCCESS = 'SUBMIT_ENQUIRY_SUCCESS';
export const SUBMIT_ENQUIRY_FAILURE = 'SUBMIT_ENQUIRY_FAILURE';

export const submitEnquiry = (courseId, formData) => async (dispatch) => {
  try {
    const response = await axios.post(`http://localhost:3001/courses`, formData);
    dispatch({
      type: SUBMIT_ENQUIRY_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: SUBMIT_ENQUIRY_FAILURE,
      payload: error.message,
    });
  }
};
