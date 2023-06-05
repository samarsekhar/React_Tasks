import React, {useState} from "react";
import "./App.css";
import "./assets/styles.css";
import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import TaskEdit from "./Components/TaskEdit";

function App() {
  const [tasks, setTasks] = useState([
    {
      desc: "user1",
      id: 1,
      date: "2022-06-08",
      complete: false,
    },
    {
      desc: "Profit",
      id: 2,
      date: "2022-06-07",
      complete: false,
    },
  ])

  const onTagStatus = (task) => {
    console.log("completing task");
    setTasks(
      tasks.map((checkTask) => {
        checkTask.complete = 
        task.id === checkTask.id ? !checkTask.complete : checkTask.complete;
        return checkTask;
      })
    );
  };

  const [showTaskEdit, setShowTaskEdit] = useState(false);

  const onSaveTask = ({ desc, date}) => {
    console.log("saving tasks");
    setTasks([
      {desc: desc, date:date, id: Date.now(), complete: false},
      ...tasks
    ]);
  };

  return (
    <div className="App">
      <Header/>
      <div className="container mt-5">
        <div className="row">
        <div className="col-12 text-right">
          <button className="button outline"
                  onClick={() => setShowTaskEdit(!showTaskEdit)}>
                    {!showTaskEdit && "New"}
                    {showTaskEdit && "➖"}
                  </button>
          </div> 
          {showTaskEdit && <TaskEdit task={{}} onSaveTask={onSaveTask} />}
          <Tasks tasks={tasks} onTagStatus={onTagStatus} ></Tasks>
      </div>
      </div>
    </div>
  )
};

export default App;