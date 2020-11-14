import React from 'react';
import "./style.css";


function Employees(props) {
    return (
        <div className="container container-style">
            <div className="row row-style container-style">
                <div className="col col-title">
                    <p>Image</p>
                    {props.employee_db.map(employee => (
                        <img src={employee.image} className="list-group-item"

                        />
                    ))}
                </div>
                <div className="col col-title">
                    <p>Name</p>
                    {props.employee_db.map(employee => (
                        <li className="list-group-item">
                            {employee.name}
                        </li>


                    ))}

                </div>
                <div className="col col-title">
                    <p>Phone</p>
                    {props.employee_db.map(employee => (
                        <li className="list-group-item">
                            {employee.phone}
                        </li>


                    ))}


                </div>
                <div className="col col-title">
                    <p>Email</p>
                    {props.employee_db.map(employee => (
                        <li className="list-group-item">
                            {employee.email}
                        </li>


                    ))}

                </div>
                <div className="col col-title">
                    <p>DOB</p>
                    {props.employee_db.map(employee => (
                        <li className="list-group-item">
                            {employee.DOB}
                        </li>
                    ))}

                </div>

            </div>

        </div>
    )
}

export default Employees;

