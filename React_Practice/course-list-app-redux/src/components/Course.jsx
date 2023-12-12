import React, { useState } from 'react';
import EnquiryForm from './EnquiryForm';

const Course = ({ course }) => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);

  const handleEnquireClick = () => {
    setShowEnquiryForm(true);
  };

  return (
    <div>
      <h2>{course.title}</h2>
      {/* Display course details */}
      <button onClick={handleEnquireClick}>Enquire</button>
      {showEnquiryForm && <EnquiryForm courseId={course.id} />}
    </div>
  );
};

export default Course;
