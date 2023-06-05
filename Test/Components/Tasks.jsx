import React from "react";
import Task from "./Task";

function Tasks({ tasks, onTagStauts}) {
    return(
        <div className="card">
            <div className="row">
                {
                    tasks.map((task) => (
                        <div className="col-12" key={task.id}>
                            <Task task={task} onTagStatus={onTagStauts} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Tasks;