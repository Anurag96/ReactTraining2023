export const FETCH_COURSES_SUCCESS = 'FETCH_COURSES_SUCCESS';
export const FETCH_COURSES_FAILURE = 'FETCH_COURSES_FAILURE';

export const fetchCourses = () => async (dispatch) => {
  try {
    const response = await fetch('http://localhost:3000/courses');
    const data = await response.json();

    dispatch({
      type: FETCH_COURSES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_COURSES_FAILURE,
      payload: error.message,
    });
  }
};
