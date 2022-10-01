import {useState} from 'react'

function Counter({count, onClick}){
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );


}

export default function MyApp() {
    const [count, setCount] = useState(0);
    function handleClick(){
        setCount(count+1);
    }
    return (
        <div>
            <h1>Counters that update together</h1>
            <Counter count={count} onClick={handleClick} />
            <Counter count={count} onClick={handleClick} />
        </div>
    )
}
