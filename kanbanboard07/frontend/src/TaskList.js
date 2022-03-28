import React from 'react'
import Task from './Task'
import styles from './assets/css/TaskList.css'

const TaskList = ({tasks}) => {
    // console.log(tasks);
    return (
        <div className={styles.TaskList}>
            <ul>
                {tasks.map (task => <Task
                                        key={task.no}
                                        task={task}/>)}
            </ul>
        </div>
    )
}

export default TaskList