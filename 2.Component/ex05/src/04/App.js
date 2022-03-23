import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const date = new Date();
    const hours = date.getHours();
    const [state, setState] = useState({
        hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2),
        minutes: ('0'+date.getMinutes()).slice(-2),
        seconds: ('0'+date.getSeconds()).slice(-2)
    });
    
    useEffect(() => {
        const interval = setInterval(() => {
            setState({
                hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2),
                minutes: ('0'+date.getMinutes()).slice(-2),
                seconds: ('0'+date.getSeconds()).slice(-2)
            })
        }, 1000)

        return () => clearInterval(interval);
    })
    

    return (
        <Clock
            message={'ex05: useEffect Hook example'}
            hours={state.hours}
            minutes={state.minutes}
            seconds={state.seconds}/>
    );

}