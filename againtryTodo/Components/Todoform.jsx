import React, {useState, useEffect} from "react";
import Todolist from "./Todolist";

const Todoform = () => {
    const data = {username:"", email:"", password:""}
    const [form, setForm] = useState(data)
    const [formerrors, setFormErrors]= useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [todo, setTodo] = useState([])

    const submithandler = (e) => {
        e.preventDefault()
        const newtodos = [...todo, form]
        setTodo(newtodos)
        setForm("[]")
        setFormErrors(validate(form))
        setIsSubmit(true)
    }

    const changehandler = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    useEffect(() => {
        console.log(form);
        if(Object.keys(formerrors).length===0 & isSubmit){
            console.log(formerrors);
        }
    }, [formerrors])

    const validate=(values)=>{
        const errors= {}
        const usercheck = /^[a-z0-9]+\@[a-z]+\.[a-z]{2,6}/
        if(!values.username){
            errors.username="username is required"
        }
        if(!values.email){
            errors.email="email is required"
        }
        else if(!usercheck.test(values.email)){
            errors.email="This is not valid email format"
        }
        if(!values.password){
            errors.password="password is required"
        }
        else if(!values.password.length<4){
            errors.password = "password must be more than 4 charcters"
        }
        else if(values.password.length>10){
            errors.password = "password cannot be exist more than 10 charcters"
        }
        return errors
    } 

    const deletehandler = (indexvalue)=> {
        const filteredTodo = todo.filter((elem, index)=>index!==indexvalue)
        setTodo(filteredTodo)
    }
    const edithandler = (editIndexValue) => {
        const filteredTodo = todo.filter((elem,index)=> index !== editIndexValue);
        setTodo(filteredTodo);
        const editSelector = todo.find((elem,index)=> index === editIndexValue);
        setForm({
            username:editSelector.username,
            email:editSelector.email,
            password:editSelector.password,
        })
    }
    
    return(
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-5">
                        {Object.keys(formerrors).length===0 & isSubmit ?(<div><h1>Signed in successfully</h1></div>):
                        (<pre>{JSON.stringify(form)}</pre>)}
                        <form onSubmit={submithandler}>
                            <div className="form-group">
                                <label>User Name:</label>
                                <input type="text" className="form-control"
                                       name="username" value={form.username}
                                       onChange={changehandler} />
                            </div>
                            <p className="text-danger">{formerrors.username}</p>
                            <div className="form-group">
                                <label>Email:</label>
                                <input type="text" className="form-control"
                                       name="email" value={form.email}
                                       onChange={changehandler}/>
                            </div>
                            <p className="text-danger">{formerrors.email}</p>
                            <div className="form-group">
                                <label>Password:</label>
                                <input type="password" className="form-control"
                                       name="password" value={form.password}
                                       onChange={changehandler}/>
                            </div>
                            <p className="text-danger">{formerrors.password}</p>
                            <button className="btn btn-success">Submit</button>
                        </form>
                        <Todolist todos={todo} deletehandler={deletehandler} edithandler={edithandler} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Todoform;