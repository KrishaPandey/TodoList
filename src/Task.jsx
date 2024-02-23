import React from 'react'

function Task(props) {
  
      return(
            <div className='task'
            style={{backgroundColor:props.completed?"green":"white"}}>
              <h1>{props.taskName}</h1>
              <button onClick={()=>props.deletetask(props.id)}>Delete</button>
              <button onClick={()=>props.completeTask(props.id)}>Completed</button>
            </div>
          )
}

export default Task
