import React from 'react'

const Clock01 = () => {
    const date = new Date();

    let hours = date.getHours();
    let session = 'AM';
    if(hours > 12) {
        session = 'PM';
    }
    hours = ('0' + date.getHours()).slice(-2);
    
    return (
        <div>{hours}:{('0'+ date.getMinutes()).slice(-2)}:{('0'+ date.getSeconds()).slice(-2)} {session}</div>
    )
}

export default Clock01