import axios from "axios";
import React from "react";

const Todolists = ({todolist,removeTask,taskToupdate,showPOpup}) => {

    const removeHandler = (id) => {
        axios.delete(`http://localhost:8000/api/todos/${id}`)
        .then((res)=>{
            removeTask(res.data)
        }).catch(err=>console.log(err))
    }
    return (
        <div>
            {todolist.length>0 ?<div className="container">
                <div className="row">
                    <div className="col-8 m-auto">
                        <div>
                            <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Number</th>
                                    <th>Subject</th>
                                    <th>Message</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            </table>
                            <tbody>
                                {
                                    todolist.map((data,index)=> {
                                        const {name,email,number,subject,message} = data;
                                        return(<tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{name}</td>
                                            <td>{email}</td>
                                            <td>{number}</td>
                                            <td>{subject}</td>
                                            <td>{message}</td>
                                            <td>
                                                <i className="bi bi-pencil-square text-success me-2" style={{cursor:"pointer"}}
                                                onClick={() => {
                                                    taskToupdate(data)
                                                    showPOpup()
                                                }}></i>
                                                <i className="bi bi-trash text-danger me-2" style={{cursur:"pointer"}}
                                                onClick={() => {removeHandler(data._id)}}></i>
                                            </td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                        </div>
                    </div>
                </div>
            </div>: null}
        </div>
    )
};

export default Todolists;