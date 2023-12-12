
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Enquiries = () => {
  const { courseId } = useParams();
  const [enquiries, setEnquiries] = useState([]);

//   useEffect(() => {
//     fetch(`http://localhost:3001/courses/${courseId}`)
//       .then((response) => response.json())
//       .then((data) => setEnquiries(data))
//       .catch((error) => console.error('Error fetching enquiries:', error));
//   }, [courseId]);

//   const [data, setData] = useState([]);
//   const [data2, setData2] = useState([]);

  const fetchData = async () => {
             // Actual API Call
             try {
              const baseURL = `http://localhost:3001/courses/${courseId}`;
              const response = await axios.get(`${baseURL}`)
                  .then(response => response.data);
                  setEnquiries(response);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
  };

  useEffect(() => {
      fetchData();
  }, []);

  return (
    <div>
      <h2>Enquiries for Course {courseId}</h2>
      <ul>
        {JSON.stringify(enquiries)}
        {/* {
        (enquiries?.map((enquiry, index) => (
          <li key={index}>
            <p>Name: {enquiry.name}</p>
            <p>Email: {enquiry.email}</p>
          </li>)
        ))
        } */}
      </ul>
    </div>
  );
};

export default Enquiries;
