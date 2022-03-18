import React, { useState } from 'react'
import styles from './assets/scss/Card.scss'
import TaskList from './TaskList'

const Card = ({card}) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <div className={styles.Card}>
            <div className={styles.Card__Title}>{card.title}</div>
            <div className={styles.Card__Details}>{card.description}</div>
            <TaskList tasks={card.tasks}/>
        </div>
    )
}

export default Card