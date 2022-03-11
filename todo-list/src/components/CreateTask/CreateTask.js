import {useState} from 'react';
import './CreateTask.css'
const CreateTask=(props)=>{
    
    const [enteredTask,setEnteredTask]=useState(props.title);
    const submitHandler = (event) => {
        event.preventDefault();
        const newTask = {
          title: enteredTask,
        };
        console.log(newTask)
        props.onCreateList(newTask)
        setEnteredTask("");
      };
    
    const taskChangeHandler=(event)=>{
        setEnteredTask(event.target.value)
    }
    return(
        <div className='create-task'>
            <h1>Create Task</h1>
            <form onSubmit={submitHandler}>
                <div>
                        <input
                            value={enteredTask}
                            onChange={taskChangeHandler}
                            type="text"
                        ></input>
                </div>
                <button type="submit">Submit</button>
                <button className="cancel" onClick={props.onClick}>
                    Cancel
                </button>
            </form>
        </div>
        
    )
}

export default CreateTask