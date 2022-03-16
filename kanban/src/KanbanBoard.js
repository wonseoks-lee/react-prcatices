import React from 'react'
import CardList from './CardList'
import styles from './assets/css/KanbanBoard.css'
import cards from './data.json'

const KanbanBoard = () => {
    // console.log(cards);

    return (
        <div className={styles.KanbanBoard}>
            <CardList title={'To Do'}       cards={cards.filter(e => e.status === 'ToDo')} />
            <CardList title={'In Progress'} cards={cards.filter(e => e.status === 'Doing')} />
            <CardList title={'Done'}        cards={cards.filter(e => e.status === 'Done')} />
        </div>
    )
}

export default KanbanBoard