
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Enquiries = () => {
  const { courseId } = useParams();
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/courses/${courseId}`)
      .then((response) => response.json())
      .then((data) => setEnquiries(data))
      .catch((error) => console.error('Error fetching enquiries:', error));
  }, [courseId]);


  // const fetchData = async () => {
  //   // Actual API Call
  //   try {
  //     const baseURL = `http://localhost:3001/courses/${courseId}`;
  //     const response = await axios.get(`${baseURL}`)
  //       .then(response => response.data);
  //     setEnquiries(response);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <div>
      <h5>Enquiries for Course {courseId}</h5>
      {/* <pre>
        {JSON.stringify(enquiries)}
      </pre> */}
      {/* {Object.keys(enquiries).map((key, index) => {
        return (
          <div>
            {key}
          </div>
        )
      })} */}

      {/* {
        (Object.values(enquiries).map((enquiry, index) => (
          <li key={index}>
            <p> {enquiry}</p>
          </li>)
        ))
      } */}

      <table class="table">
        <thead>
          <tr>
            {Object.keys(enquiries).map((key, index) => {
              return (
                <th scope="col">
                  {[key]}
                </th>
              )
            })}
            {/* <th scope="col">#</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            {
              (Object.values(enquiries).map((enquiry, index) => (
                <td key={index}>
                  <p> {enquiry}</p>
                </td>)
              ))
            }
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Enquiries;
