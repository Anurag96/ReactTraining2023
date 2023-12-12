import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitEnquiry } from '../actions/enquiryActions';

const EnquiryForm = ({ courseId }) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitEnquiry(courseId, formData));
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default EnquiryForm;
