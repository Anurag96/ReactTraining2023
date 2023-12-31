import React from 'react'
import { useNavigate } from "react-router-dom";

function Card(props) {
    let navigate = useNavigate();

    const navigateStudent = (courseId) => {
        navigate(`/courses/${courseId}/enquiries`);
        console.log(`Enquire button clicked for course with ID: ${courseId}`);
    }
    const navigateForm = (courseId) => {
        console.log(courseId)
        navigate(`/form/${courseId}`);
        console.log(`Enquire button clicked for course with ID: ${courseId}`);
    }
    return (
        <div className="card" style={{ "width": "20rem", padding: '4rem', margin: '2rem' }}>
            <div className="card-body">
                <h5 className="card-title">{props.course}</h5>
                <h5 className="card-title">{props.courseName}</h5>
                <button className='my-2' onClick={() => navigateForm(props.courseid)}>Enquire </button><br />
                <button onClick={() => navigateStudent(props.courseid)}>Students Details</button>
            </div>
        </div>
    )
}

export default Card
