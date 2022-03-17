import React, {useState} from 'react';

export default function ({ begin, step }) {
    const [val, setVal] = useState(begin);
    
    const r = useState(begin)
    const { b } = {a: 10, b: 20};
    const [d,f] = [1,2,3,4];

    console.log(b, d, f)

    return (
        <div>
            {/* <button onClick={e => setVal(val+step)}> */}
            <button onClick={e => r[1](r[0]+step)}>
                <strong>+</strong>
            </button>
            {' '}
            {/* <span>{ val }</span> */}
            <span>{ r[0] }</span>
        </div>
    );
}