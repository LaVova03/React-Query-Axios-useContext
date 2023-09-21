import './Table.css';
import React from "react";


const Table = ({ isSuccess, data }) => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price (₴)</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {isSuccess && data.map(({ id, Category, Description, Name, Price, Quantity }, item) => {
                        return (
                            <tr key={id} >
                                <td>{item}</td>
                                <td>{Category}</td>
                                <td>{Name}</td>
                                <td>{Quantity}</td>
                                <td>{Price}</td>
                                <td>{Description}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    );
};

export default Table;