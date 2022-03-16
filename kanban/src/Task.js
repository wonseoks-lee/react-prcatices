import React from 'react'
import styles from './assets/css/Task.css'
const Task = ({task}) => {
    // console.log(tasks);
    return (
        <li className={styles.TaskList__Task}>
            <input type='checkbox' defaultChecked={task.done} />
            {task.name}
            <a href='#' className={styles.TaskList__Task__remove}></a>
        </li>   
    )
}

export default Task