import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

class RestaurantList extends Component {
    constructor(){
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount(){
        this.getData()
        }
        getData(){
            fetch("http://localhost:3000/restauranst")
        .then((response)=>{
            response.json().then((result)=>{
            this.setState({list: result})
        })
        })
        
    }
    delete() {
        fetch("http://localhost:3000/restauranst", {
            method:"DELETE",
            headers:{
                'Content-Type':'application/json'
            },
        })
        .then((result)=>{
            result.json().then((response)=>{
                console.log(response)
                alert("Restauranst has been Delete")
            })
        })
    }
    render() {
        return (
            <div className='App'>
                <h1>Restaurant List</h1>
                {
                    this.state.list ? 
                    <div>
                        <table className='table'>
                            <thead className='thead-dark'>
                                <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.list.map((item) =>
                                    <tr key={item.id} onClick={this.componentDidMount.bind(this, item)}> 
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.address}</td>
                                        {/* <td><Link to={"/restaurantupdate/"+item.id}>Edit</Link></td> */}
                                        <td><Link to={"/restaurantupdate/"+item.id}><FontAwesomeIcon icon={faEdit} color="blue"/></Link>
                                         <span onClick={() =>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red"/></span></td>
                                    </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        {/* {
                            this.state.list.map((item,i) => 
                                <div className='list.wrapper'>
                                    <span>{item.name}</span>
                                    <span>{item.email}</span>
                                    <span>{item.rating}</span>
                                    <span>{item.address}</span>
                                </div>
                            )
                        } */}
                    </div>: <p>Please Wait....</p>
                }
            </div>
        );
    }
}

export default RestaurantList;