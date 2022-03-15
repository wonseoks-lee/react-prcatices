import React from 'react'

const TitleBar02 = () => {
    const onclickHandler = e => {
        console.log('TitleBar02 Clikced!');
    }

    return (
        <h1
                style={{cursor : 'pointer'}}
                onClick={onclickHandler}>
                ex03: Function Event Handler(Class Component)
        </h1>
    )
}

export default TitleBar02