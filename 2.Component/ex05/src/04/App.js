import React, {useState, useEffect} from 'react';
import './assets/scss/App.scss'
import Clock from './Clock';

export default function App() {
    const getCurrentClockTime = () =>{
        const date = new Date();
        console.log("render render")
        const hours = date.getHours();
        return {
            hours: ('0' + (hours == 0 ? 12 : (hours > 12 ? hours - 12 : hours))).slice(-2),
            minutes: ('0'+date.getMinutes()).slice(-2),
            seconds: ('0'+date.getSeconds()).slice(-2),
            session: hours > 12 ? "pm" : "am"
        };
    }

    const [currentClockTime, setCurrentClockTime] = useState(getCurrentClockTime());
    const [ticks, setTicks] = useState(0);
    
    //  { , []} => 한번만 실행되는 것을 보장 
    // useEffect(() => {
    //     setInterval(() => {
    //         setCurrentClockTime(getCurrentClockTime());
    //         setTicks(ticks + 1);
    //     });
    // }, [])
    
    useEffect(() => {
        console.log('Update Color(DB) Using APIs...');
        setTimeout(() => {
            setCurrentClockTime(getCurrentClockTime());
            setTicks(ticks + 1);
            console.log("ticktictick ==> ", ticks)
        }, 1000);
        console.log("---------------------------------------------------")
    }, [currentClockTime])
    



    return (
        <>
        <span>{ticks}</span>
        <Clock
            message={'ex05: useEffect Hook example'}
            hours={currentClockTime.hours}
            minutes={currentClockTime.minutes}
            seconds={currentClockTime.seconds}/>
        </>
    );

}