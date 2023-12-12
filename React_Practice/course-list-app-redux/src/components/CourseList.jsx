import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses } from '../actions/courseAction';
import Course from './Course';

const CourseList = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courseReducer.courses);
  const error = useSelector((state) => state.courseReducer.error);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div>
      {error && <div className="error-message">{error}</div>}
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
