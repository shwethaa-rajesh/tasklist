import logo from './logo.svg';
import './App.css';
import CreateTask from './components/CreateTask/CreateTask'
import Tasks from './components/Tasks/Tasks'
import {useState} from 'react';
const INITIAL_DUMMY_LISTS=[{id:1, title:'Sleep',},{id:2, title:'Cry'},{id:3, title:'BreakDown'}]
  
function App() {
  const [taskItems, setTaskItems] = useState(INITIAL_DUMMY_LISTS);
  // console.log(INITIAL_DUMMY_LISTS)
   const saveNewListData = (newListData) => {
     const newTaskData = {...newListData};
     newTaskData.id = taskItems.length+1;
     console.log("New ",newTaskData);
    setTaskItems([...taskItems,newTaskData]);
   };
  return (
   <div className='app-container'>
     <Tasks tasks={taskItems}/>
     <hr/>
     <CreateTask onCreateList={saveNewListData} title='check'></CreateTask>
   </div>
  );
}

export default App;
