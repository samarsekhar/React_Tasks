import React, {useState, useEffect} from 'react'

const CreateForm = () => {
  const data = {
    name:"",
    email:"",
    password:"",
    start_date:"",
    end_date:"",
  }
  const [form, setForm] = useState(data)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  const [todo, setTodo] = useState([])
  const [views, setViews] = useState(false)

  const changehandler = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const submithandler = (e) => {
    e.preventDefault()
    setFormErrors(validate(form))
    setIsSubmit(true)
  }

  const deletehandler = (indexvalue)=> {
    const filteredtodo = todo.filter((ele,index)=>index!== indexvalue)
    setTodo(filteredtodo)
  }

  const edithandler = (editindexvalue)=> {
    const filteredtodo=todo.filter((ele,index)=>index !== editindexvalue)
    setTodo(filteredtodo)
    const editselector =todo.find((ele,index)=>index === editindexvalue)
    setForm({
      name:editselector.name,
      email:editselector.email,
      password:editselector.password,
      start_date:editselector.start_date,
      end_date:editselector.end_date,
    })
  }

  useEffect(() => {
    if(Object.keys(formErrors).length===0 && isSubmit){
      const newtodos=[...todo,form]
      setTodo(newtodos)
    }
  }, [formErrors])

  const validate = (values) => {
    const errors={}
    const OnlyStrings = /^[a-zA-Z ]*$/;
    const isEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if(!values.name){
      errors.name="Username is required"
    }
    else if(!values.name.match(OnlyStrings)){
      errors.name="Please enter alphabets only"
    }
    if(!values.email){
      errors.email="Email is required"
    }
    else if(!values.email.match(isEmail)){
      errors.email="This is not valid email format"
    }
    if(!values.password){
      errors.password="Password is required"
    }
    else if(values.password.length<10){
      errors.password="Password should contain atleast 10 characters"
    }
    if(!values.start_date){
    errors.start_date="Please select start date"
    }
    if(!values.end_date){
      errors.end_date="Please select end date"
    }
    return errors
  }
  return (
    <div className='container'>
      <div className="row m-md-auto">
        <div className="col col-md-8 m-md-auto">
          <div className="gutter-gap">
            <h1 className='text-center mb-3'>Registration Form</h1>
            <form onSubmit={submithandler}>
              <div className="mb-3">
                <input type="text" className='form-control rounded-0 py-2 fs-5' name='name'
                       value={form.name} placeholder="Enter name" onChange={changehandler}/>
                       <p className='text-danger m-0'>{formErrors.name}</p> 
              </div>
              <div className='mb-3'>
                  <input text="text" className='form-control rounded-0 py-2 fs-5' name='email'
                         value={form.email} placeholder="Enter email address" onChange={changehandler}/>
                         <p className='text-danger m-0'>{formErrors.email}</p>
              </div>
              <div className='mb-3'>
                <input text="password" className='form-control rounded-0 py-2 fs-5' name='password'
                       value={form.password} placeholder="Enter password" onChange={changehandler}/>
                       <p className='text-danger m-0'>{formErrors.password}</p>
              </div>
              <div className='mb-3 d-md-flex'>
                <div className='w-50 me-1'>
                  <p>Start Date</p>
                  <input type="date" className='form-control rounded-0 py-2 fs-5' name='start_date'
                         value={form.start_date} onChange={changehandler}/>
                         <p className='text-danger m-0'>{formErrors.start_date}</p>
                </div>
                <div className='  w-50 ms-1'>
                 <p>End Date</p>
                <input type='date' className='form-control rounded-0 py-2 fs-5' name='end_date' value={form.end_date} onChange={changehandler}/>
          
                 <p className='text-danger m-0'>{formErrors.end_date}</p>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateForm;
