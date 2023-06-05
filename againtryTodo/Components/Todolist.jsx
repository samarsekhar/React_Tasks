import React from "react";
const Todolist = ({todos, deletehandler, edithandler}) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map((todos,index)=> {
                                    return(
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{todos.username}</td>
                                            <td>{todos.email}</td>
                                            <td>{todos.password}</td>
                                            <td>
                                                <i className="fa-solid fa-trash-can" name="add" onClick={() =>deletehandler(index)}/>
                                                <i className="fa-solid fa-pen" name="edit" onClick={() =>edithandler(index)}/>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
};

export default Todolist;