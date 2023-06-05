import React, {useState, useEffect} from "react";

const PhoneBook = () => {
    const [form, setForm] = useState({FirstName:'',LastName:'',Number:''})
    const [formerrors, setFormerrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const [store, setStore] = useState([])
    const [view, setView] = useState(false)

    const changeHandler = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault()
        setFormerrors(validate(form))
        setIsSubmit(true)
    }
    useEffect(() => {
        if(Object.keys(formerrors).length === 0 && isSubmit){
            const newstore = [...store,form]
            setStore(newstore)
        }
    }, [formerrors])
    const validate = (values) => {
        const errors={}
        const onlystrings = /^[a-zA-Z]*$/
    if(!values.FirstName){
        errors.FirstName='Please enter the first name'
    }
    else if(!values.FirstName.match(onlystrings)){
        errors.FirstName='Please enter only alphabets'
    }
    if (!values.LastName){
        errors.LastName='Please enter the list name'
    }
    else if(!values.LastName.match(onlystrings)){
        errors.LastName='Please enter only alphabets'
    }
    if(!values.Number){
        errors.Number='Please enter the moblie number'
    }
    else if(values.Number.length<10){
        errors.Number='Mobile number must must be 10 numbers'
    }
    else if(values.Number.length>10){
        errors.Number='Mobile number has maximum 10 numbers only'
    }
    return errors
    }

    const editHandler = (editindexvalue) => {
        const filteredstore =store.filter((elem,index)=>index!==editindexvalue)
        setStore(filteredstore)
        const editselector = store.find((elem,index)=>index===editindexvalue)
        setForm({
            FirstName:editselector.FirstName,
            LastName:editselector.LastName,
            Number:editselector.Number
        })
    }
    const deleteHandler = (indexvalue) => {
        const filteredstore = store.filter((elem,index)=>index!==indexvalue)
        setStore(filteredstore) 
    }
    return(
        <div>
            <div className="container mt-5">
                <div className="row m-md-auto">
                    <div className="col-md-8 m-md-auto">
                        <div className="card">
                            <div className="card-header bg-secondary">
                                <h1 className="text-center mb-3">Phone Book</h1>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitHandler}>
                                    <div className="mb-3 d-md-flex">
                                        <div className="w-50 me-2">
                                            <input type="text" className="form-control rounded-0 py-2 fs-5" name="FirstName" value={form.FirstName} placeholder="Enter Your First Name" onChange={changeHandler} />
                                            <p className="text-danger">{formerrors.FirstName}</p> 
                                        </div>
                                        <div className="w-50 me-2">
                                            <input type="text" className="form-control rounded-0 py-2 fs-5" name="LastName" value={form.LastName} placeholder="Enter Your Last Name" onChange={changeHandler} />
                                            <p className="text-danger">{formerrors.LastName}</p>
                                        </div>
                                        <div className="w-50 ms-2">
                                            <input type="number" className="form-control rounded-0 py-2 fs-5" name="Number" value={form.Number} placeholder="Enter Your Mobile Number" onChange={changeHandler} />
                                            <p className="text-danger">{formerrors.Number}</p>
                                        </div>
                                    </div>
                                    <div className="d-md-flex align-items-center justify-content-between mt-4">
                                        <button className="btn btn-primary">Add Contacts</button>
                                        <button className="btn btn-success" type="button" onClick={() =>setView(!view)}>View</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row m-md-auto">
                    <div className="col-md-8 m-md-auto">
                        {
                            view ? <>{Object.keys(store).length> 0 ?<table className="table table-hover">
                                <thead className="bg-dark text-warning">
                                    <tr>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Mobile Number</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    store.map((person,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{person.FirstName}</td>
                                                <td>{person.LastName}</td>
                                                <td>{person.Number}</td>
                                                <td>
                                                     {/* <i className="fas fa-edit" onClick={()=>editHandler(index)}/> */}
                                                     <input type="submit" value="edit" name="edit" className="fas fa-edit" onClick={()=>editHandler(index)} />
                                                </td>
                                                <td>
                                                    <i className="fas fa-trash" onClick={()=>deleteHandler(index)} />
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>: null} </>: null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PhoneBook;