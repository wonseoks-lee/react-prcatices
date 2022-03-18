import React, { useState } from 'react'
import styles from './assets/scss/Card.scss'
import TaskList from './TaskList'

const Card = ({card}) => {
    const [showDetails, setShowDetails] = useState(false);

    const onClickTitle = e => {
        setShowDetails(showDetails === false ? true : false);
        console.log(showDetails)
    }

    return (
        <div className={styles.Card} >
            <div className={styles.Card__Title} onClick={onClickTitle}>{card.title}</div>
            {
                showDetails === false ? 
                    <><div className={styles.Card__Details}>{card.description}</div><TaskList tasks={card.tasks} /></> : <div/>
            }
        </div>
    )
}

export default Card