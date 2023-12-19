import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    let navigate = useNavigate()
    const [data, setData] = useState([]);
    const fetchData = async () => {
        // Actual API Call
        try {
            const baseURL = 'https://fakestoreapi.com/products/categories'
            const response = await axios.get(`${baseURL}`)
                .then(response => response.data);
            setData(response);
        } catch (error) {
            console.error('Error fetching data:', error);
        }

        // Mock the Data
        // setData(mockRes.data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to={'/'}>HOME <span className="sr-only">(current)</span></Link>
                        </li>
                        {
                            data.map(e => (
                                <li className="nav-item">
                                    {/* <Link className="nav-link" to={`/category/${e}`}>{e}</Link> */}
                                    {/* <Link className="nav-link" to={`/category/${e}`} onClick={() => { window.location.reload() }}>{e.toUpperCase()}</Link> */}
                                    <Link className="nav-link" onClick={() => {
                                        navigate(`/category/${e}`)
                                        window.location.reload()
                                    }}>{e.toUpperCase()}</Link>

                                </li>
                            ))
                        }
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
