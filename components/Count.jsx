import { useState } from "react";
export default function Counter(){
    const [count, setCount]=useState(0);
    const [Counter,Increment]=useState(1);
    function handleClick(){
        setCount(count + Counter)
    }
    function decrement(){
        setCount(count - Counter)
    }
    function Incrementbtn(){
        Increment(Counter + 1)
    }
    function Decrementbtn(){
        Increment(Counter - 1)
    }
    return <div>
        <h1> Count value is:{count}</h1>
        <button onClick={handleClick}>Incrément</button>
        <button onClick={decrement}>Décrément</button>
        <h1>Incrémentation anle izy:{Counter}</h1>
        <button onClick={Incrementbtn}>Increase increment</button>
        <button onClick={Decrementbtn}>Increax</button>
    </div>
}