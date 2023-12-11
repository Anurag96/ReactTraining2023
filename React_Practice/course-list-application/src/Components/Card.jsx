import React from 'react'
import { useNavigate } from "react-router-dom";

function Card(props) {
    let navigate = useNavigate();
    const navigateStudent = () => {
        navigate('/courseRegister');
    }
    const navigateForm = () => {
        navigate('/form');
    }
    return (
        <div className="card" style={{ "width": "20rem", padding: '4rem', margin: '2rem' }}>
            <div className="card-body">
                <h5 className="card-title">{props.course}</h5>
                <button className='my-2' onClick={navigateForm}>Enquire </button><br />
                <button onClick={navigateStudent}>Students Details</button>
            </div>
        </div>
    )
}

export default Card
