import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Header() {

    const cartProducts = useSelector((state) => state.cart);

    return (
        <div className='ui menu'>
            <div >
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link class="navbar-brand" to="#">Shoppify</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <Link class="nav-link" to={'/'}>Home <span class="sr-only">(current)</span></Link>
                            </li>
                            <li class="nav-item">
                                {/* <Link class="nav-link" to={'/list'}>List</Link> */}
                            </li>

                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <Link class="nav-link" to={'/cart'}>
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                                    My Bag ({cartProducts.length})
                                </button>
                            </Link>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header
