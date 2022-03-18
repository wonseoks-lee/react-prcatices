import React, { useState }  from 'react'
import styles from './assets/css/Task.css'
const Task = ({task}) => {
    const [taskDone, setTaskDone] = useState(task.done);

    return (
        <li className={styles.TaskList__Task}>
            <input 
                type='checkbox' 
                value = {taskDone}
                checked={taskDone === true}
                onChange={e => setTaskDone(taskDone === false ? true : false)}
                />  
            {task.name}
            <a href='#' className={styles.TaskList__Task__remove}></a>
        </li>   
    )
}

export default Task