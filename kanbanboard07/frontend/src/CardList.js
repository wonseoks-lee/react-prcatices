import React from 'react'
import Card from './Card';
import styles from './assets/css/CardList.css'

const CardList = ({title, cards}) => {
    return (
        <div className={styles.CardList}>
            <h1>{title}</h1>
            {cards.map (card => <Card
                                    key={card.no}
                                    card={card}/>)}
        </div>
    )
}

export default CardList