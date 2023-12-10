import logo from './logo.svg';
import './App.css';
import InputBox from './Components/InputBox';
import ItemList from './Components/ItemList';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      title: 'Get food',
      completed: false
    },{
      title: 'Get food 1',
      completed: false
    },{
      title: 'Get food 2',
      completed: false
    }
  ])

  const addTask = (title) => {
    setTasks([...tasks, {title, completed:false}])
  }

  const completeTask = index => {
    const newTasks = [...tasks];
    newTasks[index].completed = (newTasks[index].completed == true)?false:true;
     setTasks(newTasks);
};
  return (
    <div className="App">
      <h2>Todo Application</h2>
      <InputBox addTask={addTask} />
      {
      tasks.map((task,index)=>(
        <ItemList task={task} index={index} completeTask = {completeTask}/>
      ))
        }
    </div>
  );
}

export default App;
