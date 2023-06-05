import axios from 'axios';
import React, {useState, useEffect} from 'react';
import "./App.css";
import Addtodos from './Components/Addtodos';
import Todolists from './Components/Todolists';
import Updatetodos from './Components/Updatetodos';

function App() {
  const [todolist, setTodolist] = useState([]);
  const [taskToupdate, setTaskToupdate] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:8000/api")
    .then((res)=> {
      setTodolist(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])

  const addTask = (newTask) => {
    setTodolist([...todolist,newTask])
  }

  const removeTask = (task) => {
    const newtodo = todolist.filter((item, index)=>{
      return !(item._id===task._id)
    })
    setTodolist(newtodo)
  }

  const updateTask =(task)=> {
    const newlist = [...todolist];
    newlist.forEach((item)=>{
      if(item._id===task._id){
        item.name = task.name
        item.email = task.email
        item.number = task.number
        item.subject = task.subject
        item.message = task.message
      }
    })
    setTodolist(newlist)
  }

  return (
    <div>
      <Addtodos addTask={addTask}/>
      <Todolists todolist={todolist} removeTask={removeTask}
                 taskToupdate={(task)=>{setTaskToupdate(task)}}
                 showPOpup={()=>{setShowModal(!showModal)}}/>
      {showModal && <Updatetodos taskToupdate={taskToupdate} updateTask={updateTask}
      removePopup={()=>{setShowModal(!showModal)}}/>}
    </div>
  )
}

export default App;