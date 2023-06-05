import React, { useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const RestaurantUpdate = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [rating, setRating] = useState("");
    const [address, setAddress] = useState("");

    const params = useParams();
    const nevigate = useNavigate();

    useEffect(() =>{
        getproductDetails();
    }, []);

    const getproductDetails = async () => {
        let result = await fetch(`http://localhost:3000/restauranst/${params.id}`);
        result = await result.json();
        console.log(result);
        setName(result.name);
        setEmail(result.email);
        setRating(result.rating);
        setAddress(result.address);
    };

    const update = async (e) => {
        e.preventDefault();

        let result = await fetch(`http://localhost:3000/restauranst/${params.id}`, {
            method: "PUT",
            body: JSON.stringify({ name, email, rating, address}),
            headers: { "Content-Type": "application/json"},
        });
        result = await result.json();
        console.log(result);
        alert("Restaurant has been Edit")
        nevigate("/list");
    }

  return (
    <div align="center">
      <h1>Update Restaurant</h1>
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
                  onClick={update} type="submit"> Edit Restaurant </button>
      </form>
    </div>
  )
}

export default RestaurantUpdate;
