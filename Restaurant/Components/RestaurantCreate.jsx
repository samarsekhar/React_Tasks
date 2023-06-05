import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantCreate = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState("");
    const [address, setAddress] = useState("");

    const navigate = useNavigate();

    const create = (e) => {
        e.preventDefault();
        const data = { name, email, rating, address};
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        };
        fetch("http://localhost:3000/restauranst", requestOptions)
        .then((response)=> response.json())
        .then((res)=> console.log(res));
        alert("Restaurant has been created");
        navigate("/list");
    }

  return (
    <div align="center">
      <h1>Create Restaurant</h1>
      <div className="container mb-5"></div>
      <form>
          <div className='form-group'>
              <input className='form-control w-25'
                     type="text"
                     placeholder='Enter restaurant name'
                     value={name}
                     onChange={(e) =>setName(e.target.value)}
                     />
          </div> <br />
          <div className='form-group'>
              <input className='form-control w-25'
                     type="text"
                     placeholder='Enter restaurant email'
                     value={email}
                     onChange={(e) =>setEmail(e.target.value)}
                     />
          </div> <br />
          <div className='form-group'>
              <input className='form-control w-25'
                     type="text"
                     placeholder='Enter restaurant rating'
                     value={rating}
                     onChange={(e) => setRating(e.target.value)}
                     />
          </div> <br />
          <div className='form-group'>
              <input className='form-control w-25'
                     type="text"
                     placeholder='Enter restaurant address'
                     value={address}
                     onChange={(e) => setAddress(e.target.value)}
                     />
          </div> <br />
          <button className='btn btn-outline-success'
                  onClick={create} type="submit"> Add Restaurant </button>
      </form>
    </div>
  )
}

export default RestaurantCreate;
