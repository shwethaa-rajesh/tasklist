//import CreateTask from '../CreateTask/CreateTask'
import TaskItem from '../TaskItem/TaskItem'
import './Tasks.css'
//import {useState} from 'react'
const Tasks=(props)=>{
    const TaskItems = props.tasks.map((eachTask) => {
        return <TaskItem key={eachTask.id} title={eachTask.title} ></TaskItem>;
    });
    return(<div className="task-container">
            {TaskItems}
            <hr/>
            
    </div>)
}
export default Tasks;