import React, { useState }  from 'react'
import styles from './assets/css/Task.css'
const Task = ({task, callback}) => {
    return (
        <li className={styles.TaskList__Task}>
            <input 
                type='checkbox' 
                checked={task.done === 'Y'}
                onChange={e => {callback(e.target.checked, task.no);}}
                />
            {task.name}
            <a href='#' className={styles.TaskList__Task__remove}></a>
        </li>   
    )
}

export default Task