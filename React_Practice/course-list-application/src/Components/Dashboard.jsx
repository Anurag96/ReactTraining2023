import React, { useState, useEffect } from 'react'
import mockRes from './course2.json'
import mockRes2 from './course.json'
import Card from './Card';


function Dashboard() {
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);

    const fetchData = async () => {
        // Mock the Data
        setData(mockRes);
        setData2(mockRes2)
        console.log(mockRes2)
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className='container'>
            {data2?.map((e) => (<div><Card course={e.course_name} /></div>))}

            <table>
                <tr>
                    <td> {data2?.map(e => e.students).map(e => e).map((e) => (e[0]).name).join(' ')}</td><br />
                    <td> {data2?.map(e => e.students).map(e => e).map((e) => (e[0]).major).join(' ')}</td><br />
                </tr>
                <tr>
                    <td> {data2?.map(e => e.students).map(e => e).map((e) => (e[1]).name).join(' ')}</td><br />
                    <td> {data2?.map(e => e.students).map(e => e).map((e) => (e[1]).major).join(' ')}</td><br />
                </tr>
                <tr>
                    <td> {data2?.map(e => e.students).map(e => e).map((e) => (e[2]).name).join(' ')}</td><br />
                    <td> {data2?.map(e => e.students).map(e => e).map((e) => (e[2]).major).join(' ')}</td><br />
                </tr>
            </table>

        </div>
    )
}

export default Dashboard
