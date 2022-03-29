import React, {useEffect, useState} from 'react'
import CardList from './CardList'
import styles from './assets/css/KanbanBoard.css'
// import cards from './assets/json/data.json'

const KanbanBoard = () => {
    const [cards, setCards] = useState([]);

    useEffect(async () => {
        try {
            const response = await fetch('/api/cards', {
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
            
            setCards(json.data);
        } catch(err) {
            console.log(err);
        }
    }, []);

    return (
        <div className={styles.KanbanBoard}>
            <CardList title={'To Do'}       cards={cards.filter(e => e.status === 'ToDo')} />
            <CardList title={'In Progress'} cards={cards.filter(e => e.status === 'Doing')} />
            <CardList title={'Done'}        cards={cards.filter(e => e.status === 'Done')} />
        </div>
    )
}

export default KanbanBoard