import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Forms() {
    const { courseId } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        course: '',
        enquire: ''
    })
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3001/courses`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then(() => {
                console.log(formData)
                navigate(`/`);
            })
            .catch((error) => console.error('Error submitting enquiry:', error));
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Email Name</label>
                    <input type="text" class="form-control" name='name' placeholder="Enter Name" value={formData.name} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputPassword1">Enter Course</label>
                    <input type="text" class="form-control" name='course' placeholder="Enter Course" value={formData.course} onChange={handleChange} />
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputPassword1">Enter Query</label>
                    <input type="text" class="form-control" name='enquire' placeholder="Enter Enquire" value={formData.enquire} onChange={handleChange} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}

export default Forms
