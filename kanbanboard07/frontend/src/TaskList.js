import React  from 'react'
import Task from './Task'
import styles from './assets/css/TaskList.css'

const TaskList = ({tasks, callback, notifyTaskAdd, deleteTask}) => {
    return (
        <div className={styles.TaskList}>
            <ul>
                {tasks.map (task => <Task
                                        key={task.no}
                                        task={task}
                                        callback={callback}
                                        deleteTask={deleteTask}
                                        />)}
                <input 
                    type='text' 
                    name='name'
                    className={styles.TaskList__add_task}
                    placeholder={'테스크 추가'}
                    onKeyPress={e => {
                        if(e.key === 'Enter') {
                            console.log(`call notifyAddTask(${e.target.value})`)
                            notifyTaskAdd(e.target.value)
                            e.target.value = '';
                        }
                    }}
                    />
            </ul>
        </div>
    )
}

export default TaskList