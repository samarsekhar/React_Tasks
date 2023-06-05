import React, { Component } from 'react';

class RestaurantCreate extends Component {
    constructor() {
        super();
        this.State = {
            name:null,
            email:null,
            rating:null,
            address:null,
        }
    }
    restaurantcreate() {
        fetch("http://localhost:3000/restauranst", {
            method:"Post",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then((result)=>{
            result.json().then((response)=>{
                console.log(response)
                alert("Restauranst has been added")
            })
        })
    }
    render() {
        return (
            <div align='center'>
                <h1>Restaurant Create</h1>
                <div>
                    <input onChange={(event) => {this.setState({name:event.target.value})}}
                     placeholder="Restaurant Name" /> <br/> <br/>
                    <input onChange={(event) => {this.setState({email:event.target.value})}}
                     placeholder="Restaurant Email" /> <br/> <br/>
                    <input onChange={(event) => {this.setState({rating:event.target.value})}}
                     placeholder="Restaurant Rating" /> <br/> <br/>
                    <input onChange={(event) => {this.setState({address:event.target.value})}}
                     placeholder="Restaurant Address" /> <br/> <br/>
                    <button onClick={()=> {this.restaurantcreate()}}>Add Restauranst</button>
                </div>
            </div>
        );
    }
}

export default RestaurantCreate;