import React, { useState,useEffect } from 'react';
import Edit from "./Edit"
import "./style.css";
// import Table from './Table';
const TodoList = ()=>{
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [number,setNumber] = useState("");
    const [project,setProject] = useState("");
    const [start,setStart] = useState("");
    const [finish,setFinish] = useState("");
    const [planned,setPlaned] = useState("");
    const [id,setId] =useState(0)
    const [tableData, setTableData] = useState([])
    const [showModal, setShowModal] = useState(false);
    const [editId, setEditId] = useState(null);
    const [toShow,settoShow] = useState([]);
    const [tab,setTab] = useState("Planned");
    useEffect(()=>{
        if(tab === 'all'){
            settoShow(tableData)
        }else{
            settoShow(tableData.filter((td)=> td.planned === tab));
        }
        
    },[tableData,tab]);

    const tabHandler = (tabV)=>{
        setTab(tabV)
    }
    const saveData=(e)=>{
        e.preventDefault();
        setId(id+1)
        console.log(planned )
        const giveninput={
            id:id,
            name:name,
            email:email,
            number:number,
            project:project,
            start:start,
            finish:finish,
            planned:planned

        }
        const numArr=[...number]
        // if(name&&email&&number&&project&&start&&finish&&planned){
            if(numArr[0]==0||number.length!==10){
                alert("number not valid")
            }else{
                // console.log(numArr)
                if (!/^[a-zA-Z ]+$/.test(name)){
                    alert("invalid name")
                }else{
                    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
                        alert("invalid email");
                    }else{
                        setTableData([...tableData,giveninput])
                    }
                }
            }
            
        // // }
        // else{
        //     alert("all box need to be filled")
        // }
    }
    // console.log(tableData)
    const deleteHandler = (index) =>{
        const updateItem = tableData.filter((cur)=>{
            console.log("inside delete",index)
            return cur.id!==index;
        })
        setTableData(updateItem)
    }
    return(
        <>
        <h1>Todo List </h1>
        <div className="container">
            <div className="row">
                <div className="col">
                <form action="" onSubmit={saveData}>
                <input type="text" placeholder='Enter Your Name' 
                    className="mb-4"
                    onChange={e=>setName(e.target.value)} />
                    <br />
                    <input type="email" placeholder='Enter Your Email' className="mr-4" onChange={e=>setEmail(e.target.value)}/>
                    <input type="number" placeholder='Enter Your Number' onChange={e=>setNumber(e.target.value)}/>
                    <br />
                    <input type="text" placeholder='Enter Project Name'
                    className="mt-4" onChange={e=>setProject(e.target.value)}/>
                    <br />
                    <input type="text" placeholder='Enter Task description'
                    className="mt-4" />
                   <br /> 
                   <input type="date" placeholder='Start Date'
                    className="mt-4 mr-4" onChange={e=>setStart(e.target.value)}/>


                     <input type="date" placeholder='Target Date'
                    className="mt-4" onChange={e=>setFinish(e.target.value)}/>
                    <br />
                    {/* <label htmlFor="" className='mr-4'>Task Status</label>
                     <input type="radio" placeholder='Target Date'
                    className="mr-4" name="Planned" onChange={e=>setPlaned(e.target.name)}/>
                     <input type="radio" placeholder='Target Date'
                     name="In-Progress"
                    className="mr-4" onChange={e=>setPlaned(e.target.name)}/>
                     <input type="radio" 
                     name="Done"
                     placeholder='Target Date'
                    className="mt-4" onChange={e=>setPlaned(e.target.value)}/>
                    <br /> */}
                    <div class="form-check form-check-inline">
  <input className="form-check-input" data="lable1" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"
         onChange={e=>setPlaned("Planned")}/>
  <label className="form-check-label"  for="inlineRadio1">planned</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" data="lable2" type="radio" onChange={e=>setPlaned("In-Progress")} name="inlineRadioOptions" id="inlineRadio2" value="option2" />
  <label className="form-check-label" for="inlineRadio2">in-process</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" data="lable3" type="radio" onChange={e=>setPlaned("done")} name="inlineRadioOptions" id="inlineRadio3" value="option3" /> 
  <label className="form-check-label" for="inlineRadio3">done</label>
</div>
                   {/* //---------- */}
                            <div className="row">
                                 <button className='mt-4 btn btn-info' type="submit">save</button>
                   <button className='mt-4 ml-4 btn btn-danger' type="reset">clear</button>
                  </div>
                </form>
                </div>
                <div className="col-md-8">
                </div>
                    {/* <Table TableData={tableData}/> */}

                <div className='tabs'>
                <div onClick={(e)=>{tabHandler("all")}} className={tab=== "all" ? "tab active" : "tab" } style={{margin:"0px"}}>All</div>
                    <div onClick={(e)=>{tabHandler("Planned")}} className={tab=== "Planned" ? "tab active" : "tab" } >Planned</div>
                    <div onClick={(e)=>{tabHandler("In-Progress")}} className={tab=== "In-Progress" ? "tab active" : "tab"} >In-Progress</div>
                    <div onClick={(e)=>{tabHandler("done")}} className={tab=== "done" ? "tab active" : "tab"} >Done</div>
                </div>
                    <h1>Table of data</h1>
            {/* <h6>{JSON.stringify(tableData)}</h6> */}
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table border="10">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Name</th>
                                    <th>Project</th>
                                    <th>Task</th>
                                    <th>Status</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Edit/ Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {toShow.map((ele,index)=>{
                                        return (
                                            <tr key={index+1}>
                                                 <td>{index}</td>
                                                 <td>{ele.name}</td>
                                                 <td>{ele.project}</td>
                                                 <td>{ele.planned}</td>
                                                 <td>Null</td>
                                                 <td>{ele.start}</td>
                                                 <td>{ele.finish}</td>
                                                <td ><i onClick={() => {
                                                    setShowModal(true);
                                                    setEditId(index);
                                                 }} className="mr-4 fas fa-edit"></i>
                                                 {/* <i className="fas fa-trash-alt" onClick={()=>deleteHandler(index)} ></i    > */}
                                                 <button className="fas fa-trash-alt btn btn-danger" onClick={()=>deleteHandler(ele.id)}></button>
                                                 </td>
                                                 
                                           </tr>
                                        )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
                    
            </div>
            </div>
            {
                showModal && <Edit
                    tableData={tableData}
                    id={editId}
                    setTableData={setTableData}
                    showModal={showModal}
                    closeModal={()=>setShowModal(false)}
                
                />
            }
           
        </>
    )
}
export default TodoList;