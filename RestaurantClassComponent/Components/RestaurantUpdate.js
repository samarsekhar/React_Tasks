import React, { Component } from 'react';

class RestaurantUpdate extends Component {
    constructor() {
        super();
        this.state = {
            name:null,
            email:null,
            rating:null,
            address:null,
            id:null
        }
    }
    componentDidMount(){
        fetch("http://localhost:3000/restauranst/"+this.props.state)
        .then((response)=>{
            response.json().then((result)=>{
                console.log(result)
            this.setState({
                name:result.name,
                email:result.email,
                id:result.id,
                rating:result.rating,
                address:result.address

            })
        })
        })
    }
    restaurantupdate() {
        fetch("http://localhost:3000/restauranst/"+this.props.id, {
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then((result)=>{
            result.json().then((response)=>{
                console.log(response)
                alert("Restauranst has been Update")
            })
        })
    }
    render() {
        return (
            <div align="center">
                <h1>Restaurant Update</h1>
                <div>
                    <input onChange={(event) => {this.setState({name:event.target.value})}}
                     placeholder="Restaurant Name" value={this.state.name}/> <br/> <br/>
                    <input onChange={(event) => {this.setState({email:event.target.value})}}
                     placeholder="Restaurant Email" value={this.state.email}/> <br/> <br/>
                    <input onChange={(event) => {this.setState({rating:event.target.value})}}
                     placeholder="Restaurant Rating" value={this.state.rating}/> <br/> <br/>
                    <input onChange={(event) => {this.setState({address:event.target.value})}}
                     placeholder="Restaurant Address" value={this.state.address}/> <br/> <br/>
                    <button onClick={()=> {this.restaurantupdate()}}>Update Restauranst</button>
                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;