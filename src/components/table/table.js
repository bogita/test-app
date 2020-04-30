import React from 'react';
import './table.css'

export default (props) => {

    let list = props.dataList? props.dataList.map( (item, index) =>{
        return (
            <tr key={index}>
                <th scope="row">{index}</th>
                <td>{item.name}</td>
                <td>{item.grade}</td>
            </tr>
        )
    }) : ""

    return (
        <div className="container">
            <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Grade</th>
                </tr>
            </thead>
            <tbody>
                {list}
            </tbody>
            </table>
        </div>
    )

}