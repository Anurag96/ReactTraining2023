import React, { useState, useEffect } from 'react'
import mockRes from './course2.json'
import mockRes2 from './course.json'
import mockRes3 from './course3.json'
import Card from './Card';
import axios from 'axios';


function Dashboard() {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    const fetchData = async () => {
               // Actual API Call
               try {
                const baseURL = 'http://localhost:3001/courses';
                const response = await axios.get(`${baseURL}`)
                    .then(response => response.data);
                setData(response);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        // Mock the Data
        // setData(mockRes);
        // setData2(mockRes2)
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='container'>
        {/* {JSON.stringify(data)}   */}
        {data?.map((e) => (<div><Card course={e.name} courseid={e.id} /></div>))}
        </div>
    )
}

export default Dashboard
