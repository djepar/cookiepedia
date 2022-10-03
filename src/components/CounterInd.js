import {useState} from 'react'

function CounterInd(){
    const [count, setCount] = useState(0);

    function handleClick2(){
        setCount(count +1)
    }
    return(
        <div><h2>Counters independant</h2>
        <button onClick={handleClick2}>
            Clicked {count} times
        </button>
        </div>
    )
}

export default CounterInd;