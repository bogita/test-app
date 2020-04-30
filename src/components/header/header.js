import React from 'react';
import './header.css'

import { Link } from "react-router-dom";

export default (props) => {

    return (
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/" > Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/table-one" > Table One</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="/table-two" > Table Two</Link>
                    </li>
                </ul>
            </div>
        </div>
    )

}