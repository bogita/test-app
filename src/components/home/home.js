import React from 'react';
import './home.css'

export default (props) => {

    return (
        <div className="container">
            <h3>THis is home page</h3>
            <div className="row">
                <div className="col-6">First Half</div>
                <div className="col-6">Second Half</div>
            </div>
            <div className="row">
                <div className="col-4">1</div>
                <div className="col-4">2</div>
                <div className="col-4">3</div>
            </div>

        </div>
    )

}