import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
    let navigate = useNavigate();
    const navigateHome = () => {
        navigate('/');
    }
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                {/* <Link class="navbar-brand" to="/">Navbar</Link> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" onClick={navigateHome} data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
