import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";


class RestaurantSearch extends Component {
    constructor() {
        super();
            this.state = {
                searchData: null,
                noData:false,
                lastSearch:"",
            }
    }
    restaurantsearch(key){
        console.log(key)
        this.setState({lastSearch:key})
        fetch("http://localhost:3000/restauranst?q="+key).then((data)=>{
            data.json().then((response)=>{
                console.log(response)
                if(response.length>0){
                    this.setState({searchData:response, noData:false})
                }else{
                    this.setState({noData:true,searchData:null})
                }
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
                this.search(this.state.lastSearch)
            })
        })
    }
    render() {
        return (
            <div align="center">
                <h1>Restaurant Search</h1>
                {/* <input type="text"  onChange={(event) => this.restaurantsearch(event.target.value)}/> */}
                <div className='container mt-5'>
                <div className='form-group'>
                <input className='form-control' type='text' onChange={(event) => this.restaurantsearch(event.target.value)} 
                     placeholder="search restaurant" />
                </div>
                <div>
                    {
                        this.state.searchData?<div>
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
                                this.state.searchData.map((item)=>{
                                    <tr key={item.id}> 
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.address}</td>
                                    <td><Link to={"/restaurantsearch/"+item.id}><FontAwesomeIcon icon={faEdit} color="blue"/></Link>
                                     <span onClick={() =>this.delete(item.id)}><FontAwesomeIcon icon={faTrash} color="red"/></span></td>
                                </tr>
                                })
                            }
                            </tbody>
                        </table>
                        </div>
                        : ""
                    }
                    {
                        this.state.noData? <h3>NO Data Found</h3>: null
                    }
                </div>
                </div>
            </div>
        );
    }
}

export default RestaurantSearch;