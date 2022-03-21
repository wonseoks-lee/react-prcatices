import React, { useState } from 'react'
import styles from './assets/scss/Card.scss'
import TaskList from './TaskList'

const Card = ({card}) => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <div className={styles.Card} >
            <div className={showDetails ? [styles.Card__Title, styles.Card__Title__open].join(' ') : styles.Card__Title} 
                    onClick={e => setShowDetails(!showDetails)}>{card.title}</div>
            <div className={styles.Card__Details}>{card.description}</div>
            {
                showDetails === false ? 
                    null : <TaskList tasks={card.tasks} />
            }
        </div>
    )
}

export default Card