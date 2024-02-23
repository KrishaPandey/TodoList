import React, { useState } from 'react';
import Task from './Task';

const App = () => {
  const [todolist, setTodolist] = useState([]);
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const addTask = () => {
    const task = {
      id: todolist.length === 0 ? 1 : todolist[todolist.length - 1].id + 1,
      taskName: input,
      completed:false,
    };
    const newTodolist = [...todolist, task];
    setTodolist(newTodolist);
  }

  const deleteTask = (id) => {
    setTodolist(todolist.filter((task) => task.id !== id));
  
  }
  const completeTask=(id)=>{
   setTodolist(
    todolist.map((task)=>{
      if(task.id===id)
      return{...task,completed:true}
    else{
      return task;
    }

  }
    )
   )
}

  return (
    <div>
      <div>
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div>
        {todolist.map((task) => (
          <Task  taskName={task.taskName} id={task.id} deletetask={deleteTask} completeTask={completeTask} completed={task.completed} />
        ))}
      </div>
    </div>
  );
}

export default App;
