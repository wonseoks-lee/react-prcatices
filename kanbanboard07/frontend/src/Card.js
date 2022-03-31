import React, { useState, useEffect } from 'react'
import styles from './assets/scss/Card.scss'
import TaskList from './TaskList'

const Card = ({card}) => {
    const [showDetails, setShowDetails] = useState(false);
    const [tasks, setTasks] = useState([]);

    const notifyCheckBoxChange = async (done, taskno) => {
        console.log(`/api/task?done=${done}&no=${taskno}&cardNo=${card.no}`);
        try {
            const response = await fetch(`/api/task?done=${done}&no=${taskno}&cardNo=${card.no}`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: null
            });

            if(!response.ok) {
                console.log("error:", response.status, response.statusText);
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                console.log("error:", json.message);
                throw new Error(`${json.result} ${json.message}`);
            }
            
        } catch(err) {
            console.log(err);
        }

        const newTasks = update(tasks, {
            [tasks.findIndex(task => task.no === json.data.no)]: {
                done: {
                    $set: json.data.done
                }
            }
        });

        setTasks(newTasks)
    }

    const notifyTaskAdd = async function(name) {
        try {
            const response = await fetch(`/api/task`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name : name,
                cardNo : card.no
            })
            });

            if(!response.ok) {
                console.log("error:", response.status, response.statusText);
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                console.log("error:", json.message);
                throw new Error(`${json.result} ${json.message}`);
            }
            
            setTasks([json.data, ...tasks])
        } catch(err) {
            console.log(err);
        }

    }

    const deleteTask = async function(no) {
        try {
            const response = await fetch(`/api/task?no=${no}`, {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: null
            });

            if(!response.ok) {
                console.log("error:", response.status, response.statusText);
                throw new Error(`${response.status} ${response.statusText}`);
            }

            const json = await response.json();

            if(json.result !== 'success') {
                console.log("error:", json.message);
                throw new Error(`${json.result} ${json.message}`);
            }
            
        } catch(err) {
            console.log(err);
        }

        getTask();
    }

    return (
        <div className={styles.Card} >
            <div className={showDetails ? [styles.Card__Title, styles.Card__Title__open].join(' ') : styles.Card__Title} 
                    onClick={async () => {
                        if(!showDetails) {
                            try {
                                const response = await fetch(`/api/tasks?cardNo=${card.no}`, {
                                    method: 'get',
                                    headers: {
                                        'Accept': 'application/json'
                                    }
                                });
                                
                                if(!response.ok) {
                                    console.log("error:", response.status, response.statusText);
                                    throw new Error(`${response.status} ${response.statusText}`);
                                }
                                
                                const json = await response.json();
                                
                                if(json.result !== 'success') {
                                    console.log("error:", json.message);
                                    throw new Error(`${json.result} ${json.message}`);
                                }
                                
                                setTasks(json.data);
                            } catch(err) {
                                console.log(err);
                            }
                        }
                        setShowDetails(!showDetails)
                    }}>{card.title}</div>
            {
                showDetails === false ? 
                    null :  <div className={styles.Card__Details}>
                                {card.description}
                                <TaskList tasks={tasks} callback={notifyCheckBoxChange} notifyTaskAdd={notifyTaskAdd} deleteTask={deleteTask}/>
                            </div>
            }
        </div>
    )
}

export default Card