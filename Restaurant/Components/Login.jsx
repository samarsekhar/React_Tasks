import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    let nevigate = useNavigate();

    const Login = (e) => {
        e.preventDefault();

        axios.get("http://localhost:3000/login?q="+ name)
             .then((res) => {
                 if(res.data && res.data.length){
                     console.log("success");
                     console.log(res.data[0].name);
                     localStorage.setItem("login", JSON.stringify(res));
                     nevigate("/list");
                 }
                 else{
                     console.log("not found");
                     alert("user not found")
                 }
             })
             .catch((error)=>{
                 console.log("error");
                 console.log(error);
             })
   };

   return(
       <div>
           <center>
               <h2 className="text-secondary">You have to enter admin's username and password for login...</h2>
               <div className="conatiner">
                   <div className="row">
                       <div className="col">
                           <h1 className="mt-5 mb-5 text-danger">Login</h1>
                           <form action="">
                               <input className="form-control w-25"
                                      type="text"
                                      value={name} placeholder="Enter Name"
                                      onChange={(e) => setName(e.target.value)}
                                      /> <br />
                                <input className="form-control w-25"
                                       type="password"
                                       value={password} placeholder="Enter Password"
                                       onChange={(e) => setPassword(e.target.value)}
                                       /> <br />
                                <button className="btn btn-primary mb-2" onClick={Login}>
                                    Submit
                                </button>
                           </form>
                       </div>
                   </div>
               </div>
           </center>
       </div>
   )
};

export default Login;