import React, {useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

const Addtodos = ({addTask}) => {
    const {register,handleSubmit,formState:{errors},reset} = useForm({
        defaultValues:{
            username:"",
            email:"",
            number:"",
            subject:"",
            message:""
        }
    })
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const submitHandler = (e) => {
        axios.post("http://localhost:8000/api", {
            name:name,
            email:email,
            number:number,
            subject:subject,
            message:message,
        }).then((res) => {
            addTask(res.data)
        }).catch((err)=> {
            console.log(err);
        })
        reset()
    }

    return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col col-md-8 m-md-auto">
                        <div>
                            <h1 className="text-center pb-2 mb-4 border-bottom">TODO FORM</h1>
                            <form onSubmit={handleSubmit(submitHandler)}>
                                <div className="mb-3 d-flex" style={{columnGap:"10px"}}>
                                    <div className="w-100">
                                        <label className="form-group">User Name</label>
                                        <input type="text" className="form-control"
                                               {...register("username",{
                                                required:"Required Field...",
                                                pattern:{
                                                    value:/^[A-Za-z]+$/,
                                                    message:"Please enter only characters..."
                                                }
                                               })}
                                               onChange={(e)=>{setName(e.target.value)}}
                                               />
                                               {errors.username && <p className="text-danger">{errors.username.message}</p>}
                                    </div>
                                    <div className="w-100">
                                        <label className="form-group">Email</label>
                                        <input type="text" className="form-control"
                                               {...register("email",{
                                                required:"Required Field...",
                                                pattern:{
                                                    value:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                    message:"Please provide valid email"
                                                }
                                               })}
                                               onChange={(e)=>{setEmail(e.target.value)}}
                                               />
                                               {errors.email && <p className="text-danger">{errors.email.message}</p>}
                                    </div>
                                    </div>
                                    <div className="w-50">
                                        <label className="form-group">Number</label>
                                        <input type="number" className="form-control"
                                               {...register("number",{
                                                required:"Required Field...",
                                                pattern:{
                                                    value:/^[0-9]*$/,
                                                    message:"Please enter digits only..."
                                                },
                                                minLength:{
                                                    value:4,
                                                    message:"Minimum length should be 4"
                                                },
                                                maxLength:{
                                                    value:10,
                                                    message:"Max length should be 10"
                                                }
                                               })}
                                               onChange={(e)=>{setNumber(e.target.value)}}
                                               />
                                               {errors.number && <p className="text-danger">{errors.number.message}</p>}
                                    </div>
                                    <div className="mb-3">
                                         <label className="form-group">Subject</label>
                                         <input type="text" className="form-control"
                                         {...register("subject", {
                                            required:"Required Field...",
                                         })}
                                         onChange={(e) =>{setSubject(e.target.value)}}
                                         />
                                         {errors.subject && <p className="text-danger">{errors.subject.message}</p>}
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-group">Message</label>
                                        <textarea className="form-control"
                                        {...register("message", {
                                            required:"Required Field...",
                                        })}
                                        onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                                        {errors.message && <p className="text-danger">{errors.message.message}</p>}
                                    </div>
                                    <button type="submit" className="btn btn-info w-100">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    )
};

export default Addtodos;