import React, { useState }  from 'react'
import styles from './assets/css/Task.css'
const Task = ({task}) => {
    const [taskDone, setTaskDone] = useState(task.done);

    const onChangetaskDone = (e) => {
        task.done = !taskDone;
        setTaskDone(taskDone === false ? true : false); 
    }

    return (
        <li className={styles.TaskList__Task}>
            <input 
                type='checkbox' 
                value = {taskDone}
                checked={taskDone}
                onChange={onChangetaskDone}
                />  
            {task.name}
            <a href='#' className={styles.TaskList__Task__remove}></a>
        </li>   
    )
}

export default Task