import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RestaurantList = () => {
    const [list, setList] = useState([]);

    useEffect(() => {
            fetchData();
        }, []);

        //Api Calling 
        const fetchData=()=> {
            fetch("http://localhost:3000/restauranst")
            .then((response)=>{
                return response.json();
            })
            .then((data)=>{
                setList(data);
            });
        };

    //Deleting from data
    const deleteUser = (id) => {
        fetch(`http://localhost:3000/restauranst/${id}`,{
            method:"DELETE"
        }).then((result)=>{
            result.json().then((res)=>{
                console.log(res);
                fetchData(id);
            })
        })
    }

  return (
    <div align="center">
      <h1 className='bg-info'>List Restaurants</h1>
      <div className='container mt-5'>
          <div className="row">
              <div className="col-md-10">
          <table className='table table-hover table-dark'>
              <thead className='bg-success '>
                  <tr>
                      <th className='bg-warning text-dark'>Id</th>
                      <th className='bg-warning text-dark'>Name</th>
                      <th className='bg-warning text-dark'>Email</th>
                      <th className='bg-warning text-dark'>Rating</th>
                      <th className='bg-warning text-dark'>Address</th>
                      <th className='bg-warning text-dark'>Opration</th>
                  </tr>
              </thead>
              <tbody>
                  {
                        list.map((ele) => {
                          return(
                              <tr key={ele.id}>
                                  <td>{ele.id}</td>
                                  <td>{ele.name}</td>
                                  <td>{ele.email}</td>
                                  <td>{ele.rating}</td>
                                  <td>{ele.address}</td>
                                  <td>
                                      <Link cursor='pointer' className='px-5' to={'/update/'+ ele.id}>
                                          <FontAwesomeIcon icon={faEdit} color='green' />
                                      </Link>
                                      <span className='px-5' onClick={() => deleteUser(ele.id)}>
                                          <FontAwesomeIcon icon={faTrash} color='red' />
                                      </span>
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
    </div>
  )
}

export default RestaurantList;
